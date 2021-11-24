const addBtn = document.getElementById('addBtn')
const movieList = document.getElementById('movieList')
const message = document.getElementById('message')


const addMovie = (e)=>{
    e.preventDefault()
    const editBtn = document.createElement("button")
    editBtn.className = "editBtn"
    editBtn.textContent = "Edit"
    editBtn.addEventListener('click', editMovie)
    const movieTitle = document.createElement("span")
    movieTitle.addEventListener('click', checkOffMovie)
    movieTitle.textContent = document.querySelector('input').value
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', deleteMovie)
    deleteBtn.textContent = 'X'
    const movieItem = document.createElement("li")
    movieItem.appendChild(movieTitle)
    movieItem.appendChild(editBtn)
    movieItem.appendChild(deleteBtn)
    movieList.appendChild(movieItem)
    document.querySelector('input').value = ""
}

const deleteMovie = (e)=>{
    e.target.parentNode.remove()
    let movieDeleted = e.target.parentNode.children[0].textContent
    message.textContent = `${movieDeleted} Deleted!`
    setTimeout(()=> {
        message.textContent = ""
    }, [1000])
}

const checkOffMovie = (e)=>{
    e.target.classList.toggle('checked')
    let movieChecked = e.target.parentNode.children[0].textContent
    message.textContent = `${movieChecked} Watched!`
    if(e.target.classList.contains('checked')){
        message.textContent=`${e.target.textContent} Watched!`
    } else {
        message.textContent=`${e.target.textContent} Added Back!`
    }
    setTimeout(()=> {
        message.textContent = ""
    }, [1000])
}

const editMovie = (e)=>{
    const editForm = document.getElementById("editForm")
    editForm.classList.remove("editDivHidden")
    editForm.classList.add("editDiv")
}


addBtn.addEventListener('click', addMovie)
