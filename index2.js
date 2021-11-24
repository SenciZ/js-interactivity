const addBtn = document.getElementById('addBtn')
const movieList = document.getElementById('movieList')
const message = document.getElementById('message')


const addMovie = (e)=>{
    e.preventDefault()
    const movieTitle = document.createElement("span")
    movieTitle.addEventListener('click', checkOffMovie)
    movieTitle.textContent = document.querySelector('input').value
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', deleteMovie)
    deleteBtn.textContent = 'X'
    const movieItem = document.createElement("li")
    movieItem.appendChild(movieTitle)
    movieItem.appendChild(deleteBtn)
    movieList.appendChild(movieItem)
    document.querySelector('input').value = ""
}

const deleteMovie = (e)=>{
    setTimeout(()=> {
        message.textConent = ""
    }, [1000])
    e.target.parentNode.remove()
    let movieDeleted = e.target.parentNode.children[0].textContent
    message.textContent = `${movieDeleted} Deleted!`
}

const checkOffMovie = (e)=>{
    e.target.classList.toggle('checked')
}

addBtn.addEventListener('click', addMovie)
