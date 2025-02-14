require("../models/User");

const mongoose = require("mongoose");
const keys = require("../config/dev");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useMongoClient: true});
