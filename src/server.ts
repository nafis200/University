import app from './app';
import mongoose from 'mongoose';
const port = 3000;
const mongoURI = 'your_mongo_connection_uri_here';
async function main() {
  try {
    await mongoose.connect(mongoURI);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
