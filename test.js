const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://chris-admin:uvVAsq9ZPc0SQzeb@cluster0.orpih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    throw err;
    client.close();
  }
  const collection = client.db('presidents-api').collection('presidents');
  console.log(collection);
  client.close();
});
