const btn = document.querySelector('.btn')
const place = document.querySelector('.place')
const answear = document.querySelector('.answear')
const close = document.querySelector('.close')

const yourTrip = (e) => {

    if (place.value !== "") {
        e.preventDefault()
        answear.innerHTML = place.value
        place.value = ""
        close.style.display = 'block'
    }
    else {
        alert("Musisz wpisać miejscowość")
    }
}



btn.addEventListener('click', yourTrip)
close.addEventListener('click', () => {
    close.style.display = 'none'
    answear.innerHTML = ""
})