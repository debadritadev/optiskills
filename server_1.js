const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes & Controllers
const opportunityController = require('./srs/controllers/opportunity.controller');
const { authenticate, requireRole } = require('./srs/middleware/auth');

// Public endpoints
app.get('/api/opportunities', opportunityController.getOpportunities);
app.get('/api/internships', opportunityController.getInternships);

// Protected student endpoints
app.post('/api/apply', authenticate, requireRole('student'), opportunityController.apply);

// Protected company endpoints
app.post('/api/company/postings', authenticate, requireRole('company'), opportunityController.createPosting);

// Health check
app.get('/', (req, res) => res.send('OptiSkill API is running smoothly 🚀'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));