const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = ` 
     <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>  
    <textarea class ="${text ? "hidden" : ""}"></textarea>`
    //if is text here then have no class here 



    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
   
   main.innerHTML = marked
  

    deleteBtn.addEventListener('click', () =>{
        note.remove()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })


textArea.addEventListener('input', (e) => {
    const {value} = e.target

     main.innerHTML = marked(value)
    // updateLs()
})

    document.body.appendChild(note)
}

// localStorage.setItem('name', JSON.stringify())
// JSON.parse(localStorage.getItem('name'))
// localStorage.removeItem('name')

// function updateLs(){
//      const notesText = document.querySelectorAll('textarea')

//      const notes = []
//      notesText.forEAch(note => notes.push(note.value))
//      console.log(notes)
// }