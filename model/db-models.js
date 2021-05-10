const Schema = require('mongoose').Schema;
const Model = require('mongoose').model;

//Schemas

const UserSchema = new Schema({
    _id: String,
    username: String,
    email: String,
    password: String,
    permission: Array
});

const ProductSchema = new Schema({
    _id: String,
    name: String,
    brand: String,
    images: Array,
    avail: Boolean,
    price: Number,
    type: String,
    size: Array,
    release: Date,
    description: String
});

const PaymentSchema = new Schema({
    _id: String,
    userid: String,
    date: Date,
    address: String,
    phone: String,
    type: String
});

const ReportSchema = new Schema({
    _id: String,
    userid: String,
    date: Date,
    message: String 
});

//Models

const User = Model('User', UserSchema, 'users');
const Product = Model('Product', ProductSchema, 'products');
const Payment = Model('Payment', PaymentSchema, 'payments');
const Report = Model('Report', ReportSchema, 'reports');

module.exports.User = User;
module.exports.Product = Product;
module.exports.Report = Report;
module.exports.Payment = Payment;
