require("dotenv").config();

console.log("KEY:", process.env.RAZORPAY_KEY_ID);

const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

const PORT =
process.env.PORT || 5000;

app.listen(PORT,()=>{

    console.log(
        `Server Running On ${PORT}`
    );

});