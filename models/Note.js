const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({

    question: {
        type: String,
        required: [true, "You must add question!"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "You must add description!"]
    },
    category: {
        type: String,
        default: "General" 
    },
    color: {
        type: String,
        default: "#ffffff"
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Note', NoteSchema);