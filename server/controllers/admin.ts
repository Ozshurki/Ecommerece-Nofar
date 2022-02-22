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

    const createdPaint = new Product(product);

    try {
        await createdPaint.save();
    } catch (err) {
        const error = new HttpError("Could not save the paint, please try again later", 500);
        return next(error);
    }
    res.status(200).json({paint: createdPaint});
};

exports.createProduct = createProduct;