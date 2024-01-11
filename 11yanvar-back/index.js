import express from 'express'
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = process.env.PORT
import 'dotenv/config'
app.use(express.json())
import cors from 'cors'
app.use(cors())

app.get('/', async (req, res) => {
    try {
        const flowers = await FlowerModel.find({})
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
  })
  
  app.post('/', async (req, res) => {
    const {image,name,price} = req.body
    try {
        const flowers = new FlowerModel({image,name,price})
        await flowers.save()
        res.send(flowers) 
    } catch (error) {
        res.send(error.message)
    }
  }) 
  
  app.put('/:id', async (req, res) => {
    const {id}= req.params
    const {image,name,price} = req.body
    try {
        const flowers = await FlowerModel.findByIdAndUpdate(id,{image,name,price})
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
    
  })
  
  app.delete('/:id', async (req, res) => {
    const {id}= req.params
    try {
        const flowers = await FlowerModel.findByIdAndDelete(id)
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
  })

  const flowerSchema = new Schema({
    image: String, 
    name: String,
    price: Number,
  })

  const FlowerModel = mongoose.model('FlowerModel', flowerSchema);


  mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log('Connected!'))
  .catch(()=>console.log('Not Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})