let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();

addCartToHTML();

function addCartToHTML() {
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">₹${product.price}/1 product</div> <!-- Update price display -->
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">₹${product.price * product.quantity}</div>`; 
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '₹' + totalPrice; // Update total price display
}
function checkout() {
    // Get form values
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let address = document.getElementById('address').value.trim();
    

    // Check if any field is empty or not selected
    if (name === '' || phone === '' || address === '' || country === '' || city === '' || country === 'Choose..' || city === 'Choose..') {
        alert("Please fill in all the delivery details before proceeding to checkout.");
        return;
    }

    // If all fields are filled, redirect to the payment page
    window.location.href = "gpay.html";
}
