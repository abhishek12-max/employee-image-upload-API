const fs= require("fs");
const imagekit= require("../config/imagekit");

const uploadImage = async(req, res,next) => {
    try {
         const response= await imagekit.upload({
            file:fs.readFileSync(req.file.path),
            fileName: req.file.originalname
         })
         fs.unlinkSync(req.file.path);
    res.status(200).json({
        message: "Image Uploaded Successfully",
        response: response.url
    });
    } catch (error) {
        next(error)
    }
   

};

module.exports = {
    uploadImage
};