const itemsBar = [
    "Lorem",
    "Iste",
    "Debitis",
    "Perferendis",
    "Sequi",
    "Ipsam",
    "Ipsam",
    "Beatae",
    "Aut"
]
let eWidth = 0
const TOTAL = 9
const BTN_WIDTH = 30
let droopOpen = false
let testremaining = 0

function adapt() {
    for (let n = 9; n <= TOTAL; n--) {
        // console.log(n)
        eWidth = estimateWidth(n)
        // console.log(eWidth)
        if (eWidth <= innerWidth) {
 
            showItems(n)
            break
        }
    }


}



function estimateWidth(n) {
    let text = ''
    let pad = 0
    for (let i = 0; i < n; i++) {
        text += itemsBar[i]
        pad += 10 * 2
    }
    eWidth = 11.5 * text.length + pad + BTN_WIDTH
    // console.log(eWith)
    return eWidth
}

function showItems(n) {
    navbar.innerHTML = ``
    for (let i = 0; i < n && i < itemsBar.length; i++) {
        navbar.innerHTML += `<a href=""> ${itemsBar[i]} </a>`
    }
    let remaining = TOTAL - n
    if (remaining > 0) {
        navbar.innerHTML += `<button  onclick="showRemainingItems(${remaining})">
                            <span>${remaining}</span>=</button>`
    }
    console.log("remenini :" +remaining)
    if (droopOpen == true && remaining >testremaining) {
        droopOpen = true
        showRemainingItems(remaining)
        droopOpen = false
        showRemainingItems(remaining)
    }
    if(remaining<testremaining){
        droopOpen = true
        showRemainingItems(remaining)
    }
}

        // console.log("rem", remaining)
 
function showRemainingItems(n) {
    testremaining = n
    if (droopOpen) {
        navbarDrop.innerHTML = ``
        droopOpen = false
    } else {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<li><a href=""> ${itemsBar[i]}</a></li>`
        }
        droopOpen = true
  


    }
}
