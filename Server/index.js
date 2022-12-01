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
    getHector,
    addCharacter,
    getNewCharacter,
    deleteCharacter,
    addFavorite,
    getFavorites} 
    = require('./controller')

app.get('/api/walter', getWalter)
app.get('/api/jesse', getJesse)
app.get('/api/saul', getSaul)
app.get('/api/gus', getGus)
app.get('/api/mike', getMike)
app.get('/api/hector', getHector)
app.get('/api/newCharacter', getNewCharacter)
app.get('/api/favorite', getFavorites)
app.post('/api/addCharacter', addCharacter)
app.delete('/api/deleteCharacter/:id', deleteCharacter)
app.put('/api/addFavorite/:id', addFavorite)



app.listen(4444, () => console.log('Docked at port 4444'))