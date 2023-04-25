const form = document.querySelector(".login-form");

const emailInputRequired = form.firstElementChild.firstElementChild.setAttribute(
    "required",
    "@");


// const emailInput = form.firstElementChild;
// console.log(emailInput);
// const emailRequired = emailInput.firstElementChild;
// console.log(emailRequired);
// emailRequired.setAttribute("required", "@");

const passwordInputRequired =
form.lastElementChild.previousElementSibling.firstElementChild.setAttribute(
    "required",
    " "
);

// const btnInput = form.lastElementChild;
// console.log(btnInput);
// const lableInput = btnInput.previousElementSibling;
// console.log(lableInput);
// const passwordReq = lableInput.firstElementChild;
// console.log(passwordReq);
// passwordReq.setAttribute("required", " ");





form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail, password
    }

    console.log(formData);

    // const formData = new FormData(event.currentTarget)
    // formData.forEach((value, name) => {
    //     console.log('value', value);
    //     console.log("name", name);
    // })
}







