const express = require('express');
const router = express.Router();
const Note = require('../models/Note'); 

// 1. GET all notes 
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find().sort({ date: -1 }); // newest note on the top
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. POST add new note
router.post('/', async (req, res) => {
    let assignedColor = "#f3f4f6"; 

    const categoryColors = {
        "Network": "#fef08a",    
        "Database": "#bbf7d0",   
        "React": "#bae6fd",     
        "CSS": "#fecaca"        
    };

    if (categoryColors[req.body.category]) {
        assignedColor = categoryColors[req.body.category];
    }

    const note = new Note({
        question: req.body.question,
        description: req.body.description,
        category: req.body.category,
        color: assignedColor 
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE notes
router.delete('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "We couldn't find a note!" });

        await note.deleteOne();
        res.json({ message: "Note deleted successfully!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;