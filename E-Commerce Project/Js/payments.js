
console.log('its working')

const formStep1 = document.querySelector('.form-step1')
const formStep2 = document.querySelector('.form-step2')
const next = document.querySelector('.payment-details')
const back = document.querySelector('.back-btn')
const progress = document.querySelector('.progress-done')
const submit = document.querySelector('.submit')
const confirmation = document.querySelector('.confirmation-modal')
const firstname = document.getElementById('fname')
const lastname = document.getElementById('lname')
const company = document.getElementById('company')
const street = document.getElementById('street')
const city  = document.getElementById('city')
const postcode = document.getElementById('postcode')
const phone = document.getElementById('phone')
const cardName = document.getElementById('cardName')
const cardNum = document.getElementById('cardNum')
const expiry = document.getElementById('month')
const cvv = document.getElementById('CVV')
const backbtn = document.querySelector('.back')
const productOrder = document.getElementById('product-order')
const subtotal = document.querySelector('.subtotal')
const total = document.querySelector('.total')

next.addEventListener('click', function(e) {
    e.preventDefault()
   checkDeliveryInputs()

   
  
   
})

back.addEventListener('click', function(e) {
    e.preventDefault()
    formStep1.classList.remove('hide')
    formStep2.classList.remove('show')
    progress.classList.remove('complete')

})

submit.addEventListener('click', function(e){
    e.preventDefault()
    checkPaymentInputs()
   

})

backbtn.addEventListener('click', function() {

    if (confirmation.classList.contains('show')){
        confirmation.classList.remove('show')
    }

})

displayOrder()

function displayOrder() {
   var description =  localStorage.getItem("description")
   var price = localStorage.getItem("price")
   var imgSrc = localStorage.getItem("imgSrc")

   console.log(description, price, imgSrc)

   var orderSummary = document.createElement('div')
   orderSummary.classList.add('order')
   orderSummary.innerHTML = ` <img src="${imgSrc}">
   <h3 class="fav-desc">${description}</h3>
   <p class="fav-price">${price}</p>`

   productOrder.appendChild(orderSummary)
  
   calculateSubTotal(price)  
}

function calculateSubTotal(price) {
    let itemPrice = parseFloat(price.replace('£', ''))
    let shippingCost = 4.99
    let totalCost = Math.round((itemPrice += shippingCost) * 100) / 100
    console.log(totalCost)

    subtotal.innerHTML = 'Subtotal: '+'£' +totalCost
    total.innerHTML = 'Total:  ' +'£' +totalCost

}

function checkDeliveryInputs() {

    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const streetValue  = street.value.trim()
    const cityValue    = city.value.trim()
    const postcodeValue = postcode.value.trim()
    const phoneValue  = phone.value.trim()

    if(firstnameValue === ''){
        setErrorFor(firstname, 'Firstname cannot be blank')
    } else{
        setSuccess(firstname)
    }

    if (lastnameValue === ''){
        setErrorFor(lastname, 'Lastname cannont be blank')
    } else {
        setSuccess(lastname)
    }

    if (streetValue === ''){
        setErrorFor(street, 'Street cannot be blank')
    } else {
        setSuccess(street)
    }
    if (cityValue === ''){
        setErrorFor(city, 'City cannot be blank')
    }  else{
        setSuccess(city)
    }

    if (postcodeValue === ''){
        setErrorFor(postcode, 'Postcode cannot be blank')
    } else {
        setSuccess(postcode)
    }

    if (phoneValue === ''){
        setErrorFor(phone, 'Phone number cannont be blank')
    } else{
        setSuccess(phone)
    }

    // check if fields are filled before proceeding
    if (firstnameValue != '' && lastnameValue != '' && streetValue != '' && cityValue != ''
         && postcodeValue != '' && phoneValue != ''){
        formStep1.classList.add('hide')
        console.log('it worked!!')
        formStep2.classList.add('show')
        progress.classList.add('complete')
    }
    

}




function checkPaymentInputs(){
    const cardNameValue = cardName.value.trim()
    const cardNumValue = cardNum.value.trim()
    const expiryValue = expiry.value.trim()
    const cvvValue = cvv.value.trim()

    if (cardNameValue == ''){
        setErrorFor(cardName, 'Card Name Cannot be blank')
    } else{
        setSuccess(cardName)
    }

    if(cardNumValue == ''){
        setErrorFor(cardNum, 'Card number cannot be blank')
    } else{
        setSuccess(cardNum)
    }

    if(expiryValue == ''){
        setErrorFor(expiry, 'Expiry Cannot be blank')
    } else{
        setSuccess(expiry)
    }

    if(cvvValue == ''){
        setErrorFor(cvv, 'CVV cannot be blank')
    } else{
        setSuccess(cvv)
    }


    if (cardNameValue != '' && cardNumValue != '' && expiryValue != '' && cvvValue != ''){
        confirmation.classList.add('show')
    }

}


function setErrorFor(input, message){
    const formElement = input.parentElement
    formElement.classList.add('failure')
    input.placeholder = message
}

function setSuccess(input){
    const formElement = input.parentElement

    if (formElement.classList.contains("failure") == true){
        formElement.classList.remove('failure')
        input.classList.remove('failure')

        formElement.classList.add('success')

    } else {
        formElement.classList.add('success')
    }
    


}