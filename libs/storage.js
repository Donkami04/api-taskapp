const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.fieldname);
  },
});

const upload = multer({ storage: storage });

module.exports = {upload};

// exports.upload   = upload.single('photo') ;

// exports.uploadFile = (req, res) => {
//     res.send({data: 'Enviar un archivo'})
// }