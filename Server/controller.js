const characters = require('./db.json')
let globalId = 7

module.exports = {
    getWalter: (req, res) => {
        res.status(200).send(characters[0])
    },
    getJesse: (req, res) => {
        res.status(200).send(characters[1])
    },
    getSaul: (req, res) => {
        res.status(200).send(characters[2])
    },
    getGus: (req, res) => {
        res.status(200).send(characters[3])
    },
    getMike: (req, res) => {
        res.status(200).send(characters[4])
    },
    getHector: (req, res) => {
        res.status(200).send(characters[5])
    },
   
    addCharacter: (req, res) => {
        const {name, picture, quote} = req.body
        const index = characters.findIndex((el) => el.id === +req.params.id)



        const newCharacter = {
            id: globalId,
            name,
            picture,
            quote,
            likes: 0
        }
        globalId++
        
        characters.push(newCharacter)
        res.status(200).send(characters[index])
        
    },
    getNewCharacter: (req, res) => {
        const remove = characters.slice(6)
        res.status(200).send(remove)
    },

    deleteCharacter: (req, res) => {
        const index = characters.findIndex((el) => el.id === +req.params.id)

        characters.splice(index, 1)

        res.status(200).send(characters[index])
    },

    updateCharacter: (req, res) => {
        const index = characters.findIndex((el) => el.id === +req.params.id)
        const {type} = req.body

        if(type === 'like'){
            characters[index].likes += 1
        }else if(type === 'dislike'){
            characters[index].likes--
        }
        
        res.status(200).send(characters[index])

    },
   
}