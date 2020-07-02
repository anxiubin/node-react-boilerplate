const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { User } = require("./models/User")

dotenv.config()

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, 
  useFindAndModify: false
}).then(() => console.log('mongodb connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world'))

app.post('./register', (req, res) => {

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({ success: true })
  })
})


app.listen(port, () => console.log(`example app listening on ${port}`))

