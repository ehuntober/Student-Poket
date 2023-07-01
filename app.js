require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express();

const connectDB = require('./db/connect')


const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')



// middleware
app.use(express.json())

//routes

app.get('/', (req,res)=>{
res.send('<h1> Student Poket API </h1> <a href="/api/v1/"> Routes </a>')})


const budgetsRouter = require('./routes/budget');
app.use('/budgets', budgetsRouter);


// products route


app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 3000



const start = async () =>{
    try{
        // connectDB

        await connectDB(process.env.MONGO_URI)

        app.listen(port, console.log(`Server is listening on ${port}...`))
    }

    catch(error){
        console.log(error)

    }
}

start()



