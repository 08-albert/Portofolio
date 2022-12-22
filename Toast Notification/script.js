const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


const messages = [
    'Massage One',
    'Massage Two',
    'Massage Three',
    'Massage Four',
]


const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())


function createNotification(messages = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomTypes())

    notif.innerText = messages ? messages : getRandomMassage()

    toasts.appendChild(notif)

    setTimeout(() =>{
        notif.remove()
    }, 3000)

}

function getRandomMassage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomTypes() {
    return types[Math.floor(Math.random() * types.length)]
}