const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dktmor3n3",
  api_key: "329948549663922",
  api_secret: "LqjGSNdGELsOvbMvCP3GC34Dae4",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "images",
    allowedFormats: ["jpg", "png"],
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
