// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely. 
//^ studied response:  V V V V V V V
//link outputs "articles" which has 5 arrays that contain different number of objects within
// ^ ^ ^ ^ ^ ^ ^ ^
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
function Header() {

    const mainHead = document.createElement('div');
    const dateHead = document.createElement('span');
    const titleHead = document.createElement('h1');
    const tempHead = document.createElement('span');

    mainHead.appendChild(dateHead);
    mainHead.appendChild(titleHead);
    mainHead.appendChild(tempHead);

    mainHead.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    dateHead.textContent = 'February 21, 2020';
    titleHead.textContent = 'Lambda Times';
    tempHead.textContent = '98°'

    return mainHead;
    }
    //test
    const headerParent = document.querySelector('.header-container');

    headerParent.appendChild(Header());
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function Header() {

    const mainHead = document.createElement('div');
    const dateHead = document.createElement('span');
    const titleHead = document.createElement('h1');
    const tempHead = document.createElement('span');

    mainHead.appendChild(dateHead);
    mainHead.appendChild(titleHead);
    mainHead.appendChild(tempHead);

    mainHead.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    dateHead.textContent = 'February 21, 2020';
    titleHead.textContent = 'Lambda Times';
    tempHead.textContent = '98°'

    return mainHead;
    }
    //test
    const headerParent = document.querySelector('.header-container');

    headerParent.appendChild(Header());