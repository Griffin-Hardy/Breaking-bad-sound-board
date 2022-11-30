const express = require('express')
const cors = require('cors')


const app = express()


app.use(express.json())
app.use(cors())


const {getWalter, 
    getJesse, 
    getSaul, 
    getGus, 
    getMike, 
    getHector} 
    = require('./controller')

app.get('/api/walter/', getWalter)
app.get('/api/jesse/', getJesse)
app.get('/api/saul/', getSaul)
app.get('/api/gus/', getGus)
app.get('/api/mike/', getMike)
app.get('/api/hector/', getHector)



app.listen(4444, () => console.log('Docked at port 4444'))