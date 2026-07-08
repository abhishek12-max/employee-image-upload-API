const uploadImage = (req, res) => {

    console.log(req.file);

    res.status(200).json({
        message: "Image Uploaded Successfully",
        file: req.file
    });

};

module.exports = {
    uploadImage
};