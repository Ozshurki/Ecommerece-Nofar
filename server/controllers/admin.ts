const HttpError = require("../models/http-error");
import {Request, Response, NextFunction} from "express";

const Product = require('../models/product');

const createProduct = async (req: Request, res: Response, next: NextFunction) => {

    const {title, description, price, type, images, sizes, colors} = req.body;

    const product = {
        title,
        description,
        price,
        type: type,
        images,
        sizes,
        colors
    };

    const createdProduct = new Product(product);

    try {
        await createdProduct.save();
    } catch (err) {
        const error = new HttpError("Could not save the product, please try again later", 500);
        return next(error);
    }
    res.status(200).json({product: createdProduct});
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {

    const {id, title, description, price, type, images, sizes, colors} = req.body;

    const product = {
        id,
        title,
        description,
        price,
        type: type,
        images,
        sizes,
        colors
    };

    let wantedProduct;
    try {
        wantedProduct = await Product.findByIdAndUpdate(id, product);
    } catch (err) {
        const error = new HttpError("Something went wrong, could not update the product", 500);
        return next(error);
    }

    res.status(200).json({message: "Update successfully update", wantedProduct});
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {

    const {id} = req.params;

    try{
        await Product.findByIdAndDelete(id);
    }catch (err){
        const error = new HttpError("Something went wrong, could not delete the product", 500);
        return next(error);
    }

    res.status(200).json({message: "Product deleted"});
}

exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;