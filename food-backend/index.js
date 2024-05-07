require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
//  middle wares 
app.use(cors())
app.use(express.json())

// data base conection

// mongoose
// .connect('mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@atlascluster.5o1iez3.mongodb.net/?retryWrites=true&w=majority')
// .then(
//   console.log("MongoDb Conected  Successfully")
//   )
// .catch((error)=> console.log("Error Connectiong to Mongodb ",error))

// //  api rouutes here 
// const menuRoutes= require('./api/routes/Menuroutes')
// app.use('/menu', menuRoutes)

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = process.env.MONMGO_URL;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     await client.connect();


//     //  all menu items oparation 
//     app.get('/menus', async (req, res) => {
//       const result = await menuCollection.find().toArray()
//       res.send(result)
//     })

//     //  all cart oparation
//     //  posting to cart our db 
//     app.post('/carts', async (req, res) => {
//       const cartItem = req.body
//       const result = await cartCollection.insertOne(cartItem)
//       res.send(result)
//     })
//     //  get cart uisng email 
//     app.get('/carts', async (req, res) => {
//       const email = req.query.email
//       const filter = { email: email }
//       const result = await cartCollection.find(filter).toArray()
//       res.send(result)
//     })

//     // get spaceficks  carts 
//     app.get('/carts/:id', async (req, res) => {
//       const id = req.params.id
//       const filter = { _id: new ObjectId(id) }
//       const result = await cartCollection.findOne(filter)
//       res.send(result)
//     })
//     //  delete items  form cart 
//     app.delete('/carts/:id', async (req, res) => {
//       const id = req.params.id
//       const filter = { _id: new ObjectId(id) }
//       const result = await cartCollection.deleteOne(filter)
//       res.send(result)
//     })
// //  update cart quanntity 

// app.put('/carts/:id', async (req, res) => {
//   const id = req.params.id
//   const {quantity}= req.body
//   const filter = { _id: new ObjectId(id) }
//   const options={upsert:true}
//   const updateDoc={
//     $set:{
//       quantity:parseInt(quantity,10)
//     },
//   }
//   const result= await cartCollection.updateOne(filter,updateDoc,options)
  
// })

//     // database & Collection
//     const menuCollection = client.db("Foodi-Client").collection("menus");
//     const cartCollection = client.db("Foodi-Client").collection("cartItems")

//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {

//     // await client.close();
//   }
// }
// run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})