import express from 'express'
import homeRoute from './routes/homeRoute.js'

import {join} from 'path'

//APP
const app = express()


const port = process.env.PORT || '3000'

app.set('view engine', 'ejs')


//SERVING STATIC FILES OF PUBLIC FOLDER
app.use(express.static(join(process.cwd(), 'public')))


//Load Routes
app.use('/', homeRoute)

//
app.get('*' , (req, res) =>{
    res.send("404 page not found")
})




//SERVER LISTENING IN PORT
app.listen(port, ()=>{
    console.log(`listening in port http://localhost:${port}`)
})