```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('mycollection');

    // Find documents with a specific field
    const query = { field: 'value' };
    const documents = await collection.find(query).toArray();
    console.log(documents);

    // Insert a document
    const doc = { name: 'John', age: 30 };
    const result = await collection.insertOne(doc);
    console.log(result);

    // Update a document
    const filter = { name: 'John' };
    const updateDoc = {
      $set: {
        age: 31
      }
    };
    const updatedResult = await collection.updateOne(filter, updateDoc);
    console.log(updatedResult);

    // Delete a document
    const deletedResult = await collection.deleteOne({ name: 'John' });
    console.log(deletedResult);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```