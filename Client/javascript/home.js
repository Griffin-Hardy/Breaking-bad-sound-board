const baseURL = 'http://localhost:4444'


const displayChar = document.querySelector('#newCharacterDisplay')
const addChar = document.querySelector('#addCharacter')



const createCharacterCard = (character) => {
    const charCard = document.createElement('section')
        charCard.classList.add('new-character-card')

        charCard.innerHTML = `
        <img id="charIMG" alt='character image' src=${character.picture} height="200" width="200"/>
        <section id="charText">
        <h1>${character.name}</h1>
        <h3 id="quote">${character.quote}</h3>
        </section>
        <section id="popBtn">
        <button class="likeBtn" onclick="updateCharacter(${character.id}, 'dislike')">Dislike</button> 
        <p id="likeNum">Likes: ${character.likes}</p> 
        <button class="likeBtn" onclick="updateCharacter(${character.id}, 'like')">Like</button>
        </section>
        <button id="delBtn" onclick="deleteCharacter(${character.id})">Delete</button>
    `
    displayChar.appendChild(charCard)

}

const displayCharacter = (arr) => {
    for(let i = 0; i < arr.length; i++){
        createCharacterCard(arr[i])
        
    }
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
    const quote = document.querySelector('#quote')

    let bodyObj = {
        name: name.value,
        picture: picture.value,
        quote: quote.value
    }

    // console.log(bodyObj)

    axios.post(`${baseURL}/api/addCharacter`, bodyObj)
        .then((res) => {
            getCharacter()
            
        })
        .catch((err) => {
            console.log(err)
        })
        
}

const deleteCharacter = (id) => {
    axios.delete(`${baseURL}/api/deleteCharacter/${id}`)
        .then((res) => {
            displayChar.innerHTML = ''
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
            getCharacter()
        })
        .catch((err) => {
            console.log(err)
        })
}

const sounds = [
    'Breaking Bad Intro', 
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
    
    addChar.addEventListener('click', addCharacter)
