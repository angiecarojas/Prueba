const mongoose = require("mongoose");

/*
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));*/



  mongoose.set('useFindAndModify', false);
  mongoose.connect('mongodb://angiecarojas:Carolina28.@cluster0-shard-00-00-lxt7u.gcp.mongodb.net:27017,cluster0-shard-00-01-lxt7u.gcp.mongodb.net:27017,cluster0-shard-00-02-lxt7u.gcp.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    userCreateIdex: true,
    useNewUrlParser: true
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));
