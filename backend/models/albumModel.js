const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    pin: { type: String, required: true, unique: true },
    images: [{ 
        url: String, 
        isFavourite: { type: Boolean, default: false },
    }],
    categories: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Album', albumSchema);
