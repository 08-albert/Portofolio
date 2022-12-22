
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',  dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}
//create drag function

function dragStart() {
   this.className += ' hold'
   setTimeout(() => this.className = 'invisible', 0)
   
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e){
   e.preventDefault()  //=>https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event
}

function dragEnter(e){
    e.preventDefault()   //=>https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event
    this.className += ' hovered'
}

function dragLeave(){
   this.className = 'empty'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}