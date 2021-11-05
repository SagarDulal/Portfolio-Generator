const multer =require('multer')

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    fs.mkdir('./uploads', function(err) {
        if(err) {
            console.log(err.stack)
        } else {
            callback(null, './uploads');
        }
    })
  },
  filename: function (req, file, callback) {
    callback(null, + '-' + Date.now()  + file.originalname);
  }
});

const upload  = multer({
  storage: storage,
  limits:{
    fieldSize : 1024*1024*3
  },
})

module.exports = storage