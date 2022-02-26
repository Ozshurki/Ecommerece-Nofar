import {Request, Response, NextFunction} from "express";

import {ProductDoc} from "../models/product-int";
const HttpError = require('../models/http-error');
const Product = require('../models/product');

const getProducts = async (req: Request, res: Response, next: NextFunction) => {

    let products;

    try{
        products = await Product.find();
    }catch (err){
        const error = new HttpError("Fetching products failed, please try again later", 500);
        return next(error);
    }

    res.status(200).json({products: products.map((product:ProductDoc) => product.toObject({getters:true}))});
}

const getPaints = async (req: Request, res: Response, next: NextFunction) => {

    let paints;

    try {
        paints = await Product.find({type: "paint"});
    } catch (err) {
        const error = new HttpError("Fetching paints failed, please try again later", 500);
        return next(error);
    }
    res.status(200).json({paints: paints.map((paint:ProductDoc) => paint.toObject({getters:true}))});
};

const getBags = async (req: Request, res: Response, next: NextFunction) => {

    let bags;

    try {
        bags = await Product.find({type: "bag"});
    } catch (err) {
        const error = new HttpError("Fetching bags failed, please try again later", 500);
        return next(error);
    }
    res.status(200).json({bags: bags.map((bag:ProductDoc) => bag.toObject({getters:true}))});
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {

    const productID = req.params.id;
    let product;

    try {
        product = await Product.findById(productID);
    } catch (err) {
        const error = new HttpError("Something went wrong, please try again", 500);
        return next(error);
    }

    if (!product) {
        const error = new HttpError("Could not find the product", 404);
        return next(error);
    }

    res.status(200).json({product: product.toObject({getters:true})});
};

exports.getProducts = getProducts;
exports.getPaints = getPaints;
exports.getBags = getBags;
exports.getProduct = getProduct;
