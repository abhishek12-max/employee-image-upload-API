const mongoose= require("mongoose");
const employeeschema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },

    password:{
        type:String,
        required:true,
        minlength:6
    },

    role:{
        type:String,
        enum:["admin","manager","employee"],
        default:"employee"
    },

    profileimage:{
        type:String,
        default: ""
    }

},
{
    timestamps:true
},

)

const Employee= mongoose.model("employee",employeeschema);

module.exports= Employee;