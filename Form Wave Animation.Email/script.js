const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label
    .innerText.split('') //split the letters into single letter
    .map((letter, idx)=> `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
    .join('') //
})

//innerText is looking into label
//split is split into array put each letter into string
//map create an array with letter span
//join returning back into a string