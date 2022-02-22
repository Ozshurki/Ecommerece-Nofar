import {Document} from "mongoose";

export interface ProductDoc extends Document{
    title: {type:String, require:true},
    description: {type:String, require: true},
    price: {type: Number, require: true},
    type: {type: String, require: true},
    images: [String],
    size: [String],
    color: [String],
    date: {type:Date}
}