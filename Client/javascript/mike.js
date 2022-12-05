const baseURL = 'http://localhost:4444'


const displayChar = document.querySelector('#characterDisplay')

const sounds = [
'Dont make me beat you', 
'I brought sandwiches', 
'Its been a pleasure', 
'Shut your mouth', 
'That all you got?'
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
        <img alt='character image' src=${character.picture}/>
        <h1>${character.name}</h1>
        <section>
        <button onclick="updateCharacter(${character.id}, 'dislike')">Dislike</button> 
        Popularity: ${character.likes} 
        <button onclick="updateCharacter(${character.id}, 'like')">Like</button>
        </section>
    `
    displayChar.appendChild(newCharCard)

}

const displayCharacter = (arr) => {
    createCharacterCard(arr)
}

const getCharacter = () => {
    axios.get(`${baseURL}/api/mike`)
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