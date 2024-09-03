// Retrieving HTML Elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = form.querySelector('button');




// function to update class and show error
function showError(input, message) {
    // getting the parent Element of input
    const formControl = input.parentElement;
    //  adding Error class
    formControl.className = 'form-control error';
    // getting small element from formControl 
    const small = formControl.querySelector('small');
    // Updating the inner text of small
    small.innerText = message;
}

// Check to whether Email is Entered in the corect form
function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim()))
    {
        showSuccess(email);
    }
    else {
        showError(email,`${getFieldId(email)} is not Valid`)
    }
}

function showSuccess(input) {
    // getting the parent Element of input
    const formControl = input.parentElement;
    //  adding Error class
    formControl.className += 'form-control success';
    // getting small element from formControl 
    const small = formControl.querySelector('small');
}

// Getting Field id Capitalized
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1) ; // string.charAt(0).toUpperCase() + string.slice(1)  
}

// Check inputField length
function checkLength(input,min,max) {
    console.log(input,input.value.length);
    if (input.value.length < min) {
       
        showError(input, `${getFieldId(input)} showed be greater ${min} characters`);}
    else if(input.value.length > max){
        showError(input, `${getFieldId(input)} showed be Less ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

// Password and Confirm password check
function passwordMatch(input1,input2) {
    if(input1.value !== input2.value){
        showError(input2, "Passwords don't mactch");
    }
}






// Event listeners are in the last usually
function checkrequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value === '') {
            console.log(input.id); 
            showError(input, `${getFieldId(input)} is Required`);
        }
        else {
            showSuccess(input);
        }
    });

}
//  Create event listener for submit button
form.addEventListener('submit', function (e) {
    e.preventDefault(); // stops page from reloading
    // Checking Username
    checkrequired([username, email, password, password2]);
    
    checkLength(username, 3,10);
    checkLength(password,4,15);
    checkEmail(email);
    passwordMatch(password,password2);
});


// debugger;