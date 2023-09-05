const mongoose=require('mongoose');
const uri='mongodb+srv://Vansh:12345678Rt.@cluster0.j5sgoz0.mongodb.net/'
mongoose.connect(uri, {useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((con) => {
    console.log(con.connections)
    console.log('Connected to MongoDB');
    console.log(process.env.NODE_ENV);
    // Your application logic goes here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });