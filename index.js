const express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT|| 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uifvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 async function run(){

    try{
await client.connect();
const productCollection=client.db("productService").collection("product");

// Read all product
app.get('/products',async(req,res)=>{
    const query={};
    const cursor=productCollection.find(query);
    const prodcuts=await cursor.toArray();
    res.send(prodcuts)
})

// post or creat single product

// update single product

// Delete single product
    }
    finally{

    }

}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('hello mayingefggreg');
})

app.listen(port,()=>{
    console.log('Listening to port',port);
})