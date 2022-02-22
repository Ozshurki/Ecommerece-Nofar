import express, {Request, Response, NextFunction} from "express";

const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');
const adminRoutes = require('./routes/admin');
const productsRoutes = require('./routes/products');

const app = express();

// Parse request body
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/admin/products', adminRoutes);
app.use('/api/products',productsRoutes);


app.use((req: Request, res: Response) => {
    throw new HttpError("Could not find this route", 404);
});

// Error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent)
        return next(error);

    res.status(error.code || 500);
    res.json({message: error.message});
});


mongoose.connect('mongodb+srv://ozshurki:ozshurki@nofar-ecommerce.ofaxh.mongodb.net/products?retryWrites=true&w=majority')
    .then( () =>{
        app.listen(5000, () => console.log("Connect successfully! "))
    })
    .catch( () => console.log("Failed to connect!"))
