��#   S B A - 3 1 6 

// Index.html----------------------------------------------------------------------

<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>SBA 316</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
       <header>
            <div class="logo">Henri Coding</div>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>

            </div>
            <nav class="nav-bar">
                <ul>
                    <li>
                        <a href="" class="active">HOME</a>
                    </li>
                    <li>
                        <a href="">TUTORIALS</a>
                    </li>
                    <li>
                        <a href="">SUPPORT</a>
                    </li>
                    <li>
                        <a href="">ABOUT </a>
                    </li>
                    <li>
                        <a href="">CONTACT </a>
                    </li>
                </ul>
            </nav>
       </header>
       
       <div class="sebContainer">
        
        <form id="myForm">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <button type="submit">Submit</button>
        </form>
        <h5> Background</h5>
       </div>
       
       <div class="imageContainer">
            <img src="https://images.pexels.com/photos/9553905/pexels-photo-9553905.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="">
       </div>

       <div class="cacheContainer">
            <p>Software Testing.</p>
            <h3>Schedule</h3>
        <input id="inputElement" type="text">
        <button id="buttonElement">Submit</button>
        <ul id="ulElement">
            <li>Test Cases 1</li>
        </ul>
        </div>

        <div class="tempContainer">
            <h2>Software Engineering</h2>
            <hr><hr><br>
            <div id="topic">
                <p>This is the initial Topic.</p>
            </div>
            <button id="changeButton">Change Topic</button>
        </div>
        <div class="dataContainer">
            <h2>Database</h2>
            <hr><hr><br>
            <p>Introduction</p>
            <p></p>
            <hr><hr>
            <h4>PostgreSQL</h4>
            <hr>
            <p>
                PostgreSQL is an free open-source database system that supports both relational (SQL) and non-relational (JSON) queries.
            </p><br>
            <h4>MongoDB</h4>
            <hr>
          
                <p>
                    MongoDB is a document database and can be installed locally or hosted in the cloud.

                </p><br>
            <h4>MySQL</h4>
            <hr>
            
          
            
        </div>

       
        <div class="modContainer">
            
            <div id="element" class="default">This is the element to modify</div>
            <button id="styleButton">Change Style and Class</button>
            <img id="image1" src="https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Original Image">
            <button id="changeButton">Change Image</button>
            <img id="image2" src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Original Image">
        </div>

     


        <script src="app.js" async defer></script>
    </body>
</html>


//style.css-------------------------------------------------------------------------

* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: "Google sans Regular";
    box-sizing: border-box;
    
}

body {
    background-color: tan;
}

header {
    background-color: #11101b;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;

}

.logo {
    font-size: 15px;
    font-weight: bold;
    color: aliceblue;
}

.hamburger {
    display: none;
}

.nav-bar ul {
    display: flex;
}

.nav-bar ul li a {
    display: block;
    color:aliceblue;
    font-size: 10px;
    padding: 10px 25px;
    border-radius: 50px;
    transition: 0.2s;
    margin: 0 5px;
}

.nav-bar ul li a:hover {
    color: #11101b;
    background: aliceblue;
}

.nav-bar ul li a.active {
    color: #11101b;
    background: aliceblue;
}

@media only screen and (max-width: 1380px) {
   header {
    padding: 0  50px;
   } 
   .imageContainer img{
    border: solid green;
    width: 33%;
    height: 580px;
    padding: 20px;
    margin: 20px;
    display:flex;
    
    
} 
}

@media only screen and (max-width: 1100px) {
    header {
       padding: 0 30px;
    } 
    .imageContainer img{
        border: solid green;
        width: 50%;
        height: 580px;
        padding: 20px;
        margin: 20px;
        display:flex;
        
        
    }
 }

 @media only screen and (max-width: 900px) {
    .hamburger {
       display: block;
       cursor: pointer;
    } 
    .hamburger .line {
        width: 15px;
        height: 2px;
        background: aliceblue;
        margin: 6px 0;
    }
    .nav-bar {
        height: 0;
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        width: 100vw;    
        background: rgb(26, 26, 29);
        transition: 0.5s;
        overflow: hidden;
    }
    .nav-bar.active {
        height: 450px;
    }

    
    .nav-bar ul {
        display: block;
        width: fit-content;
        margin: 80px auto 0 auto;
        text-align: center;
        transition: 0.5s;
        opacity: 0;
    }
    .nav-bar.active ul {
        opacity: 1;
    }
    .nav-bar ul li a {
        margin-bottom: 12px;
        color:red;
    }

    .sebContainer h5 {
        border: solid rgb(26, 26, 29);
        background: aliceblue;
        border-width: 0.1px;
        padding: 5px;
        border-radius: 10px;
        display: none;
        
    }

 }

 /* container------------------- */
 .sebContainer {
    border: solid rgb(26, 26, 29);
    padding: 20px;
    border-width: .2px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    align-items: center;

 }
.sebContainer h5 {
    border: solid rgb(26, 26, 29);
    background: aliceblue;
    border-width: 0.1px;
    padding: 5px;
    border-radius: 10px;
    
}
.sebContainer button {
    border-radius: 10px;
    padding: 5px;
    background: aliceblue;
    color:#11101b;
    font-weight: bold;
}

.imageContainer img{
    border: solid rgb(26, 26, 29);
    width: 100%;
    height: 580px;
    padding: 20px;
    margin: 20px;
    display:flex;
    
    
}

 .cacheContainer {
    border: solid rgb(26, 26, 29);
    width:100%;
    margin: 20px;
    padding: 20px;
    height: 42vh;
 }

 .tempContainer {
    border: solid rgb(26, 26, 29);
    height: 48vh;
    width: 100%;
    margin: 20px;
    padding: 20px;
 }
.dataContainer {
    border: solid rgb(26, 26, 29);
    height: 128vh;
    width: 100%;
    margin: 20px;
    padding: 20px;
}
 .dataContainer,h4 { 
    margin: 20px;
    display: block;
    padding: 5px;
 }
 .tempContainer, .dataContainer,h2 {
    /* align-items: center; */
    margin: 20px;
 } 

 .highlighted {
    background-color: rgb(26, 26, 29);
    font-weight: bold;
}

.modContainer {
    border: solid rgb(26, 26, 29);
    margin:20px;
    padding: 20px;
    width: 100%;
}

#image1, #image2{
    width: 100%;
    padding: 20px;
    display: block;
}
 



// app.js-----------------------------------------------------------------------------

 document.addEventListener("DOMContentLoaded", function() {
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


const buttons = document.getElementById('changeButton');
const contentDiv = document.getElementById('topic');

buttons.addEventListener('click', () => {
 
    contentDiv.innerHTML = '<p>New Topic after click.</p>';
});


// 9) Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.


// 10) Modify at least one attribute of an element in response to user interaction.

const changeButton = document.getElementById('styleButton');
const element = document.getElementById('element');


changeButton.addEventListener('click', () => {
   
    element.style.backgroundColor = 'lightblue';
    element.style.fontWeight = 'normal';

   
    element.classList.add('highlighted');
    element.classList.remove('default');
});


// 11) Register at least two different event listeners and create the associated event handler functions.


const btn= document.getElementById('changeButton');
const image = document.getElementById('image');

button.addEventListener('click', () => {
    
    image.setAttribute('src', 'Original Image');
    image.setAttribute('alt', 'Modified Image');
});

// 12) Use at least two Browser Object Model (BOM) properties or methods.



// 13) Include at least one form and/or input with HTML attribute validation.


// 14) Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)



// 15) 
