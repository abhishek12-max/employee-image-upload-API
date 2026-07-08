const Imagekit= require("imagekit");

const imagekit= new Imagekit({
    publicKey:process.env.PUBLICKEY,
    privateKey:process.env.PRIVATEKEY,
    urlEndpoint:process.env.URLENDPOINT
})

module.exports= imagekit;