document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function() {
        const navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }
});


// 1) Cache at least one element using selectElementById.

const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address.');
    } else {

        // Form submission
        alert(' Submitted Successfully. Thank you for contacting us!');
    }
});

// random color for user------------
document.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}


// 2)  Cache at least one element using querySelector or querySelectorAll.


// 3) Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
// 4) Iterate over a collection of elements to accomplish some task.
// 5) Create at least one element using createElement.
// 6) Use appendChild and/or prepend to add new elements to the DOM.
// 7) Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
const button = document.getElementById('buttonElement');
const input = document.getElementById('inputElement');
const ul = document.getElementById('ulElement');

console.log(button);
console.log(input);
console.log(ul);

button.addEventListener('click', (event) => {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li)
  input.value = "";
  console.log(`The number of children: ${ul.children.length}`)
})

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter'){
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li)
    input.value = "";
    console.log(`The number of children: ${ul.children.length}`)
  }
})






// 8) Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.



// 9) Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.


// 10) Modify at least one attribute of an element in response to user interaction.


// 11) Register at least two different event listeners and create the associated event handler functions.


// 12) Use at least two Browser Object Model (BOM) properties or methods.



// 13) Include at least one form and/or input with HTML attribute validation.


// 14) Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)



// 15) 
