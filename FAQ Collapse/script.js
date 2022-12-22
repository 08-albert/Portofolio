// - Bring in toggle buttons (querySelectorAll)
// -Loop through nodelist (forEach)
// -Add click event (addaEventListener)
// -Toggle the active class on the parent node (.parentNode & class.togle())


const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click',() => {
        toggle.parentNode.classList.toggle('active')
    })
})