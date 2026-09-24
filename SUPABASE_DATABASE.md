# OptiSkill — Supabase Database Documentation

## Overview

This document describes the Supabase backend for the OptiSkill student career platform.  
The frontend is plain static HTML/CSS/Vanilla JS — all database access goes through **`js/supabase.js`**.

---

## Setup Instructions

### Step 1 — Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) → **New Project**
2. Choose a name, database password, and region
3. Wait for provisioning (~1–2 minutes)

### Step 2 — Configure Credentials

Open **`js/supabase.js`** and replace the placeholder values:

```js
// MANUAL CONFIGURATION REQUIRED
const SUPABASE_URL = 'YOUR_SUPABASE_URL';       // → Project Settings → API → Project URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // → Project Settings → API → anon/public key
```

> ⚠️ **NEVER** put the `service_role` key or database password in any frontend file.  
> The `anon` key is safe to expose — Row Level Security (RLS) protects the data.

### Step 3 — Run the Schema

1. Go to Supabase Dashboard → **SQL Editor** → New Query
2. Open `supabase/schema.sql` from this project
3. Paste the entire file and click **Run**
4. Confirm all tables and triggers were created (check the Tables view)

### Step 4 — (Optional) Seed Sample Data

In `supabase/schema.sql`, scroll to **Section 10: Seed Data**.

1. Sign up for a company account in the app first
2. Find the company's UUID: Supabase Dashboard → **Authentication** → Users → copy the ID
3. In the seed block, replace `00000000-0000-0000-0000-000000000001` with that UUID
4. Remove the `/* ... */` comment delimiters around the block
5. Run it in the SQL Editor

### Step 5 — Email Confirmation (Optional)

By default, Supabase requires email confirmation before users can log in.

To **disable** it (easier for development):  
`Authentication` → `Providers` → `Email` → toggle off **"Confirm email"**

To **keep** it enabled: users will see a confirmation message after registering.

---

## Database Tables

### `profiles`

One row per user. Created automatically by trigger when a user signs up.

| Column | Type | Description |
|---|---|---|
| `id` | uuid | Primary key — matches `auth.users(id)` |
| `role` | text | `'student'` or `'company'` |
| `name` | text | Display name (set at registration) |
| `college` | text | Student: college/university name |
| `degree` | text | Student: degree programme |
| `year_of_study` | text | Student: e.g. `'2nd Year'` |
| `phone` | text | Contact number |
| `skills` | text | Comma-separated skill string |
| `bio` | text | About me / bio |
| `company_name` | text | Company: formal company name |
| `created_at` | timestamptz | Row creation timestamp |
| `updated_at` | timestamptz | Auto-updated on every UPDATE |

---

### `opportunities`

Internships, jobs, and scholarships posted by company users.

| Column | Type | Description |
|---|---|---|
| `id` | uuid | Primary key |
| `posted_by` | uuid | FK → `profiles(id)` |
| `type` | text | `'internship'`, `'job'`, or `'scholarship'` |
| `title` | text | Opportunity title |
| `company` | text | Company/org display name |
| `logo` | text | 2-letter abbreviation shown as avatar |
| `location` | text | City or `'Remote'` |
| `duration` | text | e.g. `'3 Months'` (internships) |
| `stipend` | text | e.g. `'₹15,000/month'` or award amount |
| `domain` | text | e.g. `'Technology'`, `'Finance'` |
| `skills` | text[] | PostgreSQL array of required skills |
| `deadline` | date | Application deadline |
| `description` | text | Full role description |
| `status` | text | `'active'` or `'closed'` |
| `color` | text | UI theme key (`'blue'`, `'green'`, etc.) |
| `created_at` | timestamptz | Row creation timestamp |

---

### `applications`

Student applications to opportunities. One row = one application.

| Column | Type | Description |
|---|---|---|
| `id` | uuid | Primary key |
| `student_id` | uuid | FK → `profiles(id)` |
| `opportunity_id` | uuid | FK → `opportunities(id)` |
| `status` | text | `'applied'`, `'under_review'`, `'shortlisted'`, `'interview'`, `'hired'`, `'rejected'` |
| `applied_at` | timestamptz | When student applied |
| `updated_at` | timestamptz | Last status change |

**Unique constraint:** `(student_id, opportunity_id)` — prevents duplicate applications.

---

### `assessment_results`

Each row = one quiz attempt. Multiple rows per student allowed (retakes tracked).

| Column | Type | Description |
|---|---|---|
| `id` | uuid | Primary key |
| `student_id` | uuid | FK → `profiles(id)` |
| `assessment_id` | text | e.g. `'python'`, `'html-css'`, `'sql'` |
| `score` | integer | Score 0–100 |
| `taken_at` | timestamptz | When quiz was completed |

> The app displays the **latest score** per `assessment_id` (ordered by `taken_at` DESC).

---

### `cv_data`

CV records per student. Maximum 2 rows per student (one `'uploaded'` + one `'created'`).

| Column | Type | Description |
|---|---|---|
| `id` | uuid | Primary key |
| `student_id` | uuid | FK → `profiles(id)` |
| `cv_type` | text | `'uploaded'` or `'created'` |
| `filename` | text | Original file name (uploaded CVs) |
| `file_size` | bigint | File size in bytes |
| `cv_json` | jsonb | JSON blob for CV builder data, or text content for TXT uploads |
| `created_at` | timestamptz | Row creation |
| `updated_at` | timestamptz | Auto-updated on every UPDATE |

**Unique constraint:** `(student_id, cv_type)` — upsert pattern used.

---

## Security: Row Level Security (RLS)

All tables have RLS **enabled**. The `anon` key in the browser can only read/write data that passes the following policies:

| Table | Who can SELECT | Who can INSERT | Who can UPDATE |
|---|---|---|---|
| `profiles` | Any authenticated user | Own row only (`id = auth.uid()`) | Own row only |
| `opportunities` | Any authenticated user (active only) | Company role only | Own posting only |
| `applications` | Student: own; Company: their opportunities | Student role only | Company (status updates) |
| `assessment_results` | Own rows only | Own rows only | Not allowed |
| `cv_data` | Own rows only | Own rows only | Own rows only |

---

## Triggers

### `on_auth_user_created`

Fires after every new Supabase Auth sign-up.  
Inserts a row into `profiles` using the `name` and `role` from `raw_user_meta_data`.

### `profiles_set_updated_at` / `applications_set_updated_at` / `cv_data_set_updated_at`

Auto-sets `updated_at = now()` before every UPDATE.

---

## Helper Functions — `js/supabase.js`

| Function | Purpose |
|---|---|
| `signUp(email, password, name, role)` | Register new user |
| `signIn(email, password)` | Login |
| `signOut()` | Logout + redirect to index.html |
| `getSession()` | Get current Supabase session |
| `getAuthUser()` | Get current Supabase Auth user |
| `resetPassword(email)` | Send password reset email |
| `requireAuth(role)` | Route guard — redirects if not logged in or wrong role |
| `getProfile(userId)` | Fetch profile row by user UUID |
| `saveProfileData(userId, fields)` | Update profile fields in Supabase |
| `getOpportunities(type)` | Fetch active opportunities (optionally by type) |
| `getOpportunityById(id)` | Fetch single opportunity |
| `createOpportunity(postedBy, fields)` | Company posts new opportunity |
| `getCompanyOpportunities(companyId)` | Company's own postings |
| `applyToOpportunity(studentId, opportunityId)` | Student applies |
| `getMyApplications(studentId)` | Student's application history |
| `hasApplied(studentId, opportunityId)` | Check if already applied |
| `getApplicationsForCompany(companyId)` | All applicants for company |
| `updateApplicationStatus(applicationId, status)` | Company updates status |
| `saveAssessmentResult(studentId, assessmentId, score)` | Save quiz score |
| `getMyAssessmentResults(studentId)` | Latest scores per assessment |
| `saveCVData(studentId, cvType, fields)` | Save/upsert CV data |
| `getMyCVData(studentId)` | Fetch student's CV records |
| `showToast(msg, type)` | Global toast notification |
| `friendlyAuthError(error)` | Maps Supabase errors to user-friendly messages |

---

## Architecture Notes

- **No build system** — plain static HTML. Supabase CDN is loaded via `<script>` tag.
- Every protected page loads: `supabase.js` → `data.js` → page script (in that order).
- `data.js` retains: `INTERNSHIPS`, `SCHOLARSHIPS`, `PLACEMENTS` (dummy display data), `ASSESSMENTS` (quiz content), `COLOR_MAP`, `applyTo/isApplied` (localStorage for dummy listings), `logout()` shim.
- `skill-assessment.html` scores are stored in `localStorage` (`optiskill_tests`) — compatible with `profile.html` which reads from the same key.
- The `service_role` key must **never** appear in any file in this project.
