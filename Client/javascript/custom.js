
const baseURL = 'http://localhost:4444'


const displayChar = document.querySelector('#characterDisplay')
const addChar = document.querySelector('#addCharacter')



const createCharacterCard = (character) => {
    const charCard = document.createElement('section')
        charCard.classList.add('character-card')

        charCard.innerHTML = `
        <img alt='character image' src=${character.picture}/>
        <h1>${character.name}</h1>
        <section>
        <button onclick="updateCharacter(${character.id}, 'dislike')">Dislike</button> 
        Popularity: ${character.likes} 
        <button onclick="updateCharacter(${character.id}, 'like')">Like</button>
        </section>
        <button onclick="console.log(${character.audio})">click me</button>
    `
    displayChar.appendChild(charCard)

}

const displayCharacter = (arr) => {
    createCharacterCard(arr)
}

const getCharacter = () => {
    axios.get(`${baseURL}/api/newCharacter`)
        .then((res) => {
            console.log(res.data)
            displayCharacter(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const addCharacter = () => {

    displayChar.innerHTML = ''

    const name = document.querySelector('#name')
    const picture = document.querySelector('#picture')
    const audio = document.querySelector('#audio')

    let bodyObj = {
        name: name.value,
        picture: picture.value,
        audio: audio.value
    }

    console.log(bodyObj)

    axios.post(`${baseURL}/api/addCharacter`, bodyObj)
        .then((res) => {
            getCharacter()
            
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

addChar.addEventListener('click', addCharacter)

