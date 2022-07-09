


let products = [
     {
    name:"Pacman III Ultra",
    photo: "https://i.picsum.photos/id/1061/350/150.jpg?hmac=As4FKt7GDmWfxWKStBcVkzoCmU2C5sP_zqob3mUPjDY",
    rate : 4.5,
    price: {
        amount: 10.00,
        unit: "USD"
    }
},
     {
    name:"World of Tanks XII",
    photo: "https://i.picsum.photos/id/366/350/150.jpg?hmac=Lt-vMDEGe-7kj0KejxR-JxJi1f5utEF1btHtNtAlPHU",
    rate : 3.5,
    price: {
        amount: 15.00,
        unit: "USD"
    }
},
     {
    name:"Dark Souls III ",
    photo: "https://i.picsum.photos/id/580/350/150.jpg?hmac=9f_d5rWNAfTk6FoYrS_mSESTjUGf0Yaq0Yj97EytZ2Y",
    rate : 1.0,
    price: {
        amount: 25.00,
        unit: "USD"
    }
},
     {
    name:"Snake , The Beginnings!",
    photo: "https://i.picsum.photos/id/738/350/150.jpg?hmac=l7cYuFcjMn0C4GUWVWDBY12aiDEjntCZOcFwffGWfU4",
    rate : 5.0,
    price: {
        amount: 100.00,
        unit: "USD"
    }
},
     {
    name:"Need for Speed",
    photo: "https://i.picsum.photos/id/1006/350/150.jpg?hmac=Wcfp0rMad5aO_oZMUDw2AUghHX7ny-CEE6qP9p91zk4",
    rate : 3.5,
    price: {
        amount: 120.00,
        unit: "USD"
    }
},
     {
    name:"Burnout",
    photo: "https://i.picsum.photos/id/514/350/150.jpg?hmac=y9UOUbIX1uI2BLymZkwqGPNR7TJKJIR6CbJQvZmSf54",
    rate : 2.2,
    price: {
        amount: 85.00,
        unit: "USD"
    }
}
]
let cart =[]


function addToCArt(i){
    let message = `how much you need? "${products[i].name}"?`
    quantity = parseInt(prompt(message))
    products[i].quantity = quantity
    cart.push(products[i])
  
}
function cartAll(){
    cartprod.innerHTML =``
    for (let i=0;i<cart.length;i++){
        cartprod.innerHTML += `
        <div id="">
        <ul>
            <li>
        Name: ${cart[i].name}| Quantity:  ${cart[i].quantity}
            </li>
        </ul> </div>
        `

    }
}


function showProduct(list){
    catalog.innerHTML=``
    for (let i=0;i<list.length;i++){
        catalog.innerHTML += `
        <div class="parent">
        <div class="product">
        <h2>${list[i].name}</h2>
        <div class="info"><p>${list[i].rate}</p></div>
        <div class="info"><p>${list[i].price.amount} ${list[i].price.unit}</p></div> 
        <button class="submit" onclick ="addToCArt(${i})" > ADD TO CART</button>
        </div>
        <div class="photo"><img src="${list[i].photo}"></div></div>
        `
    }
}
showProduct(products)