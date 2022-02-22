import {ProductDoc} from "./product-int";
import {Schema, model} from 'mongoose';


const productSchema = new Schema({
    title: {type:String, require:true},
    description: {type:String, require: true},
    price: {type: Number, require: true},
    type: {type: String, require: true},
    images: [String],
    sizes: [String],
    colors: [String],
    date: {type:Date, default: Date.now()}
});

module.exports = model<ProductDoc>('Product', productSchema);