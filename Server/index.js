const express = require('express')
const cors = require('cors')


const app = express()


app.use(express.json())
app.use(cors())


const {getWalter} = require('./controller')

app.get('/api/characters/:id', getWalter)



app.listen(4444, () => console.log('Docked at port 4444'))