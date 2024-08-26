
const mongoose=require('mongoose')
require('dotenv').config();

const mongoURL=process.env.MONGO_URL_LOCAL
mongoose.connect(mongoURL);
const db=mongoose.connection

db.on('connected',()=>{
  console.log('connected')
})

db.on('error',(err)=>{
  console.log(err)
})

db.on('disconnected',()=>{
  console.log('disconnected')
})

module.exports=db
