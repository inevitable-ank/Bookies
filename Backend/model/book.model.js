import mongoose, { mongo } from "mongoose";


const BookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    Image:String,
    title:String

})

const Book = mongoose.model("Book", BookSchema)


export default Book;