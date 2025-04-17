const express = require('express');
const router = express.Router();
const staffData = require('../data/staffData');

// Get all staff
router.get('/', (req, res) => res.json(staffData));

// Get specific staff by ID
router.get('/:id', (req, res) => {
  const staff = staffData.find(s => s.id === req.params.id);
  staff ? res.json(staff) : res.status(404).send('Staff not found');
});

// Create new staff
router.post('/', (req, res) => {
  staffData.push(req.body);
  res.status(201).send('Staff added');
});

// Update staff
router.put('/:id', (req, res) => {
  const index = staffData.findIndex(s => s.id === req.params.id);
  if (index !== -1) {
    staffData[index] = req.body;
    res.send('Staff updated');
  } else {
    res.status(404).send('Staff not found');
  }
});

// Delete staff
router.delete('/:id', (req, res) => {
  const index = staffData.findIndex(s => s.id === req.params.id);
  if (index !== -1) {
    staffData.splice(index, 1);
    res.send('Staff deleted');
  } else {
    res.status(404).send('Staff not found');
  }
});

module.exports = router;
