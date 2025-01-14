const express = require('express');
const Album = require('../models/albumModel');
const { generatePresignedUrl } = require('../utils/awsUtils');
const router = express.Router();

// Generate Presigned URL
router.post('/generate-presigned-url', async (req, res) => {
    try {
        const { fileName } = req.body;
        const key = `albums/${fileName}`;
        const url = await generatePresignedUrl(key);
        res.status(200).json({ presignedUrl: url });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate presigned URL', details: err.message });
    }
});

// Create Album
router.post('/create', async (req, res) => {
    try {
        const { title, description, pin, images, categories, createdBy } = req.body;
        const album = new Album({ title, description, pin, images, categories, createdBy });
        await album.save();
        res.status(201).json({ message: 'Album created successfully', album });
    } catch (err) {
        res.status(400).json({ error: 'Failed to create album', details: err.message });
    }
});

// Search for Presigned URL
router.post('/search-presigned-url', async (req, res) => {
    try {
        const { fileName } = req.body;
        const key = `albums/${fileName}`;
        const url = await generatePresignedUrl(key);
        res.status(200).json({ presignedUrl: url });
    } catch (err) {
        res.status(500).json({ error: 'Failed to search presigned URL', details: err.message });
    }
});

// Get Image URL
router.get('/get-image-url/:albumId/:imageIndex', async (req, res) => {
    try {
        const { albumId, imageIndex } = req.params;
        const album = await Album.findById(albumId);
        if (!album || !album.images[imageIndex]) {
            return res.status(404).json({ error: 'Image not found' });
        }
        res.status(200).json({ imageUrl: album.images[imageIndex].url });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch image URL', details: err.message });
    }
});

// Get Related Images
router.get('/related-images/:albumId', async (req, res) => {
    try {
        const { albumId } = req.params;
        const album = await Album.findById(albumId);
        if (!album) return res.status(404).json({ error: 'Album not found' });

        res.status(200).json({ relatedImages: album.images });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch related images', details: err.message });
    }
});

// Delete Album
router.delete('/:albumId', async (req, res) => {
    try {
        const { albumId } = req.params;
        const album = await Album.findByIdAndDelete(albumId);
        if (!album) return res.status(404).json({ error: 'Album not found' });

        res.status(200).json({ message: 'Album deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete album', details: err.message });
    }
});

// Get Album by PIN
router.get('/by-pin/:pin', async (req, res) => {
    try {
        const { pin } = req.params;
        const album = await Album.findOne({ pin });
        if (!album) return res.status(404).json({ error: 'Album not found' });

        res.status(200).json(album);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch album by PIN', details: err.message });
    }
});

// Add File to Favourites
router.post('/add-to-favourites/:albumId/:imageIndex', async (req, res) => {
    try {
        const { albumId, imageIndex } = req.params;
        const album = await Album.findById(albumId);
        if (!album || !album.images[imageIndex]) {
            return res.status(404).json({ error: 'Image not found' });
        }

        album.images[imageIndex].isFavourite = true;
        await album.save();

        res.status(200).json({ message: 'Image added to favourites' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add file to favourites', details: err.message });
    }
});

// Get All Favourite Files
router.get('/favourites', async (req, res) => {
    try {
        const albums = await Album.find({ 'images.isFavourite': true });
        const favouriteFiles = albums.flatMap(album => 
            album.images.filter(image => image.isFavourite)
        );

        res.status(200).json(favouriteFiles);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch favourite files', details: err.message });
    }
});

module.exports = router;
