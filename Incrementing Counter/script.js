const counters = document.querySelectorAll('.counter')  //made a constant call counters, where i put the atribute querySelectorAll for parameter counter

counters.forEach(counter => {   //Created a forEach because I want to start from 0
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = + counter.innerText

        const increment = target / 200  //how fast you want to counter

        if(c < target) {
            counter.innerText = `${Math.ceil(c+ increment)}` //The Math.ceil() function always rounds up and returns the smaller integer greater than or equal to a given number.
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()


})