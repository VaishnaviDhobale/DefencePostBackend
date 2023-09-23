

const express = require("express");
const cors = require("cors");
const upload = require("./middlewares/upload.js")
const connection = require("./config/db");
const { adminRoute } = require("./routes/adminAuth.routes");
const { userRoute } = require("./routes/userAuth.routes");
const { postRoute } = require("./routes/post.routes");
const { courseRoute } = require("./routes/course.routes");
const { freeRoute } = require("./routes/free.routes");
const { courseReviewRoute } = require("./routes/courseReview.routes.js");
const Razorpay = require("razorpay")
const {paymentRouter} = require("./routes/payment.routes.js")
// const multer = require('multer');


require ("dotenv").config();


// razorpay 
 




const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin",adminRoute);
app.use("/user",userRoute);
app.use("/payment",paymentRouter)


app.use("/post",postRoute)
app.use("/course",upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "previewPDF", maxCount: 1 },
    { name: "coursePDF", maxCount: 1 },
    { name: "introVideo", maxCount: 1 },
  ]),courseRoute)

app.use("/courseReview",courseReviewRoute)
app.use("/free",upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "freePdf", maxCount: 1 },
]), freeRoute)



app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected with database!!");
    }catch(err){
        console.log(err);
    }

    console.log(`Server running on port ${process.env.port}!!`);

})
// module.exports = {
//   instance
// }