const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../models/Note'); 

const fallbackNotes = require('../data/fallbackNotes');

// 1. GET all notes 
router.get('/', async (req, res) => {
    if (mongoose.connection.readyState !== 1) {
        console.log("Uyarı: MongoDB bağlantısı yok! Kullanıcıya statik yedek notlar (fallback) gönderiliyor.");
        return res.json(fallbackNotes); 
    }

    try {
        const notes = await Note.find().sort({ createdAt: -1 }); 
        res.json(notes);
    } catch (err) {
        console.log("Uyarı: Veritabanı sorgu hatası! Yedek notlar gönderiliyor.", err.message);
        res.json(fallbackNotes);
    }
});

// 2. POST add new note
router.post('/', async (req, res) => {
    let assignedColor = "#f3f4f6"; 

    const categoryColors = {
        "Frontend": "#3b82f6",    
        "Backend": "#10b981",   
        "Database": "#f59e0b",     
        "Network": "#8b5cf6",
        "System": "#ef4444"       
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