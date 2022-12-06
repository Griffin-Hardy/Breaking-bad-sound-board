const baseURL = 'http://localhost:4444'


const displayChar = document.querySelector('#characterDisplay')

const sounds = [
'A dog who bites', 
'A man provides', 
'ding ding AAAAHHHH', 
'I will kill your wife', 
'You are mine'
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
    axios.get(`${baseURL}/api/gus`)
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