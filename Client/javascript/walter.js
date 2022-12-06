
const baseURL = 'http://localhost:4444'


const displayChar = document.querySelector('#characterDisplay')

const sounds = [
'Say my name', 
'My name is Walter Hartwell White', 
'Holy mother of God', 
'I am the one who knocks', 
'No No NOOOO'
];

sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

const createCharacterCard = (character) => {
    const newCharCard = document.createElement('section')
    newCharCard.classList.add('character-card')

    newCharCard.innerHTML = `
        
        <h1>${character.name}</h1>
    `
    displayChar.appendChild(newCharCard)

}

const displayCharacter = (arr) => {
    createCharacterCard(arr)
}

const getCharacter = () => {
    axios.get(`${baseURL}/api/walter`)
        .then((res) => {
            console.log(res.data)
            displayCharacter(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateCharacter = (id, type) => {
    axios.put(`${baseURL}/api/updateCharacter/${id}`, {type})
        .then((res) => {
            displayChar.innerHTML = ''
            displayCharacter(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}


getCharacter()