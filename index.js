console.log("Hello World!")
const message = document.querySelector('#message');

const addMovie = (e) =>{
    e.preventDefault();
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (e)=>{
    e.target.parentNode.remove()
    message.textContent = `${e.target.parentNode.firstChild.textContent} Deleted`
    console.log(e.target.parentNode)
    revealMessage();
}

const crossOffMovie = (e)=>{
    e.target.classList.toggle('checked');
    if(e.target.classList.contains('checked')){
        message.textContent=`${e.target.textContent} Watched!`
    } else {
        message.textContent=`${e.target.textContent} Added Back!`

    }
    revealMessage();
}

const revealMessage = ()=>{
    message.classList.remove('hide')
    setTimeout((e)=>{
        message.classList.add('hide')
    }, [1000])
}