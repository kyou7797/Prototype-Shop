// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    email:String,
    username:String,
    password:String
})

// สร้างโมเดล
let Users = mongoose.model("users",productSchema)

// ส่งออกโมเดล
module.exports = Users

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
    model.save(data)
}