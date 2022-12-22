const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt =  document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animate_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML= '<img src="https://images.unsplash.com/photo-1671418203703-3b28b621fc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>'
    title.innerHTML = "lorem ipsum dolor sit "
    excerpt.innerHTML = "lorem ipsum dolor sit "
    profile_img.innerHTML = '<img src="http://randomuser.me/api/portraits/men/45.jpg" alt=""/>'
    name.innerHTML = 'John Doe'
    date.innerHTM = 'Oct 06 , 2021'
    animate_bgs.forEach((bg)=>bg.classList.remove('animated-bg'))
    animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'))
    
   
}



