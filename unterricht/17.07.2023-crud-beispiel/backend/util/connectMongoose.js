import mongoose from "mongoose";

async function connnectMongoose() {
    // Einstellungen, um mit Atlas mongoDB zu verbinden
  const _pwd = "Teksas26";
  const _database = "books";
  const _user= "Ulus";
  const _cluster = "cluster0.zhxstcw.mongodb.net";

  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(_uri);
    // Zeigt collections der DAtenbank (also _database) an
    const collections =  (await mongoose.connection.db.listCollections().toArray()).map(el => el.name);
    console.log(`collections of '${_database}' db`, collections );
    return true;
  } catch (error) {
    console.error('Could not connect to mongoose', error);
    return false;
  }
}

export { connnectMongoose }