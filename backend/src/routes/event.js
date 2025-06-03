const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController'); // Fixed path
const { authenticateToken, authorizeAdmin } = require('../middleware/eventAuth');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById); // Added missing route
router.post('/', authenticateToken, authorizeAdmin, eventController.createEvent);
router.put('/:id', authenticateToken, authorizeAdmin, eventController.updateEvent);
router.delete('/:id', authenticateToken, authorizeAdmin, eventController.deleteEvent);

module.exports = router;