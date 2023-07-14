
const express = require('express');
const dbConnect = require('./dbConnect');
const authRouter =  require('./routers/authRouter');
const dotenv = require('dotenv');
dotenv.config('./env');
const postsRouter = require("./routers/postsRouter");
const userRouter = require("./routers/userRouter");
const cloudinary = require("cloudinary").v2;

dotenv.config("./.env");
const cookieParser = require("cookie-parser");
const cors = require("cors");



const morgan = require('morgan');


// Configuration
cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});




const app = express();

   // middlewares
   
   app.use(express.json({ limit: "50mb" }));
   app.use(morgan('common'));
   app.use(cookieParser());
   app.use(
    cors({
         credentials: true,
        origin:'http://localhost:3001'
    })
);

   
   app.use("/auth", authRouter);
   app.use("/posts", postsRouter);
   app.use("/user", userRouter);
   
   
app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
});

const PORT =  process.env.PORT || 4001;
   dbConnect();
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});



































// this is our entry point 
