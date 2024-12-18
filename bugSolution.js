```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('mycollection');

    // ... (MongoDB operations as before)
  } catch (error) {
    console.error('MongoDB operation failed:', error);
  } finally {
    await client.close();
  }
}

run().catch(error => {
  console.error('Uncaught error:', error);
});
```