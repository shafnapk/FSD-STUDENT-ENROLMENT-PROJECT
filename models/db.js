const mongoose = require('mongoose');

/* mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
}); */


const mongoAtlasUri = 'mongodb+srv://pkshafna:123@cluster0.vzhbl.mongodb.net/test?retryWrites=true&w=majority';
 try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false},
      () => console.log(" Mongoose is connected from DB JS"),
    );
  } catch (e) {
      console.log(e);
    console.log("could not connect");
  }



require('./user.model');