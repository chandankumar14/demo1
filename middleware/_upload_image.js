const multer = require("multer")
const path = require("path")
const location = path.join("upload_files")



var storage = multer.diskStorage({
    destination: "upload_files/",
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
  });

  module.exports.upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 10, // 10mb
    },
  
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif" ||
        file.mimetype == "image/PNG" ||
        file.mimetype == "image/JPG" ||
        file.mimetype == "image/JPEG" ||
        file.mimetype == "image/GIF" ||
        file.mimetype == "application/vnd.openxmlformats" ||
        file.mimetype == "application/pdf" ||
        file.mimetype == "application/msword" ||
        file.mimetype == "text/csv" ||
        file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (xlsx)" ||
        file.mimetype == "application/xhtml+xml" ||
        file.mimetype.includes("excel") ||
        file.mimetype.includes("spreadsheetml")
    ) {
        cb(null, true);
      } else {
        cb("Sorry, pick file ", false);
      }
    },
  });

  