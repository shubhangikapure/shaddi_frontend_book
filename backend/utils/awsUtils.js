const AWS = require('aws-sdk');

// Configure AWS S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

// Generate presigned URL
const generatePresignedUrl = (key, expiresIn = 3600) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
        Expires: expiresIn,
    };
    return s3.getSignedUrlPromise('putObject', params);
};

module.exports = { generatePresignedUrl };
