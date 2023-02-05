const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: path.resolve(__dirname,'..','..','uploads/'),
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const name = path.basename(file.originalname ,ext)
    const fileName = `${name}-${Date.now()}${ext}`;
    cb(null, fileName);
    
  },
});

const upload = multer({ storage });

module.exports = upload;