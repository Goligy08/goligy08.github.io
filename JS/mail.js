const form = document.getElementById('userForm')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('msg')

form.addEventListener('submit', function(e) {
    e.preventDefault();
     validateAllFields();
}) 

function validateAllFields() {

    //Trim all values to remove whitespace

    const fullNameValue = fullName.value.trim()
    const  emailValue = email.value.trim()
    const messageValue = message.value.trim()

    //Check if name field is empty
    if (fullNameValue === ''){
      setError(fullName, 'Name cannot be left blank!')
    } else {
       inputSuccess(fullName)
    }

   //Check if email field is empty & check if real email
    if (emailValue === ''){
        setError(email, 'Email cannot be left blank!')
      } else if (!isEmail(emailValue)){
         setError(email, 'Not a valid email!')
      }  else {
         inputSuccess(email)
      }

    //Check if Message is blank
    if (messageValue === ''){
        setError(message, 'Message cannot be left blank!')
      } else {
         inputSuccess(message)
      }

}

function setError(input, message) {
  const formElement = input.parentElement
  formElement.classList.add('failure')
  input.classList.add('failure')
  input.placeholder = message
  
  
 
}

function inputSuccess(input) {
const formElement = input.parentElement

 if(formElement.classList.contains("failure") == true){
     formElement.classList.remove('failure')
     input.classList.remove('failure')
     
     formElement.classList.add('success')
 } else {
    formElement.classList.add('success')
 }
  
  
}

function isEmail(email) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}


gsap.from('main', { opacity: 0, duration: 3})
gsap.from('form', {opacity: 0, duration: 1.5, x: -300})