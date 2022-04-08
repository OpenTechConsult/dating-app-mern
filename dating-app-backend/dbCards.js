import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
    name: String,
    imgUrl: String
});

const Card =  mongoose.model("Card", cardSchema);

export default Card;
