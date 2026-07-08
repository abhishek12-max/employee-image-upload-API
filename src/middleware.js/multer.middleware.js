const multer = require("multer");

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "./src/uploads");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({
    storage: storage,
    fileFilter: (req,file,cb)=>{
        if(file.mimetype==="image/jpeg"|| file.mimetype==="image/png"|| file.mimetype==="image/jpg"){
            cb(null,true)
        }else{
            cb(new Error ("only jpg,jpeg,png file allowed"))
        }
    },
    limits:{
        fileSize: 2*1024*1024
    }
});

module.exports = upload;