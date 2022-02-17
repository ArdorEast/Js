// Запросы сюда
// http://www.omdbapi.com/?apikey=c5ac3c32&
// Постеры сюда
// http://img.omdbapi.com/?apikey=c5ac3c32&
// ключ
// c5ac3c32
// Запрос из задания с моим ключом
// https://www.omdbapi.com/?s=spring&apikey=c5ac3c32&page=1


// const searchOmdb = 'http://www.omdbapi.com/?apikey=c5ac3c32&';
const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('header-form');
const url = (searchWord) => `https://www.omdbapi.com/?s=${searchWord}&apikey=11eb5c25&page=1`;
const firstUrl = 'https://www.omdbapi.com/?s=happy&apikey=c5ac3c32&page=1';
// const url = 'https://www.omdbapi.com/?s=happy&apikey=c5ac3c32&page=1';
let data;

async function getData(searchWord) {
  const res = await fetch(url(searchWord));
  data = await res.json();
}

async function getDescription(filmId) {
  const urlId = `https://www.omdbapi.com/?i=${filmId}&apikey=c5ac3c32&plot=full`;
  const res = await fetch(urlId);
  return res.json();
}

function showData(searchWord) {
    getData(searchWord).then(() => {
    main.innerHTML = '';
    data.Search.forEach(elem => {
      getDescription(elem.imdbID).then(el => {
    const createDescWrapper = document.createElement('div');
    createDescWrapper.classList.add('create-description-wrapper');
    const createYear = document.createElement('p');
    createYear.classList.add('create-year');
    const createDesc = document.createElement('p');
    createDesc.classList.add('create-description');
    
    createYear.innerHTML = `${el.Year}`;
    createDesc.innerHTML = `${el.Plot}`;
    
    createDiv.appendChild(createDescWrapper);
    createDescWrapper.appendChild(createDesc);
    createDescWrapper.appendChild(createYear);
    })
    
    const createDiv = document.createElement('div');
    createDiv.classList.add('create-div');
    const createImg = document.createElement('img');
    createImg.classList.add('create-img');
    const createTitle = document.createElement('h2');
    createTitle.classList.add('create-title');
    
    createTitle.innerHTML = `${elem.Title}`;    
    createImg.src = `${elem.Poster}`;
    createImg.alt = 'image';    
      
    createDiv.appendChild(createTitle);
    createDiv.appendChild(createImg);    
    main.appendChild(createDiv);
    })
  })
}

search.addEventListener('change', (e) => showData(e.target.value))
showData('happy');


// Test with search start----------------------------------------
// async function getData(searchWord) {
//   const res = await fetch(url(searchWord));
//   data = await res.json();    
// }
// function showData(searchWord) {
//   getData(searchWord).then(() => {
//     main.innerHTML = '';
//     console.log(data);
//     data.Search.forEach(elem => {
//     const createDiv = document.createElement('div');
//     createDiv.classList.add('create-div');
//     const createImg = document.createElement('img');
//     createImg.classList.add('create-img');
//     const createTitle = document.createElement('h2');
//     createTitle.classList.add('create-title');
//     const createYear = document.createElement('p');
//     createYear.classList.add('create-year');
        
//     createTitle.innerHTML = `${elem.Title}`;
//     createYear.innerHTML = `${elem.Year}`;
//     createImg.src = `${elem.Poster}`;
//     createImg.alt = 'image';
    
//     createDiv.appendChild(createTitle);
//     createDiv.appendChild(createImg);
//     createDiv.appendChild(createYear);
//     main.appendChild(createDiv)    
//     })
//   })
// }
// search.addEventListener('change', (e) => {
//     e.preventDefault();
//     main.innerHTML = '';
//     showData(e.target.value);
//     search.value = '';
// })
// Test end--------------------------------------------

// async function getData() {
// const res = await fetch(url);
// const data = await res.json();
// const dataSearch = data.Search;
// showData(dataSearch);
// console.log(dataSearch);
// }
// getData();
// function showData(dataSearch) {
//     dataSearch.forEach(elem => {
//     const createDiv = document.createElement('div');
//     createDiv.classList.add('create-div');
//     const createImg = document.createElement('img');
//     createImg.classList.add('create-img');
//     const createTitle = document.createElement('h2');
//     createTitle.classList.add('create-title');
//     const createYear = document.createElement('p');
//     createYear.classList.add('create-year');
//     createTitle.innerHTML = `${elem.Title}`;
//     createYear.innerHTML = `${elem.Year}`;
//     createImg.src = `${elem.Poster}`;
//     createImg.alt = 'image';
//     createDiv.appendChild(createTitle);
//     createDiv.appendChild(createImg);
//     createDiv.appendChild(createYear);
//     main.appendChild(createDiv);
//     })
// }
// form.addEventListener("submit", (elem) => {
//     elem.preventDefault();
//     main.innerHTML = '';
//     getData();
//     const searchWord = search.value;
//     if (searchWord) {
//         showData(searchOmdb + searchWord);
//         search.value = "";
//     }
// });

// без вынесения функции старт
// async function getData() {
// const res = await fetch(url);
// const data = await res.json();
// const dataSearch = data.Search;
//     function showData(dataSearch) {
//     dataSearch.forEach(elem => {
//         const createDiv = document.createElement('div');
//         createDiv.classList.add('create-div');
//         const createImg = document.createElement('img');
//         createImg.classList.add('create-img');
//         const createTitle = document.createElement('h2');
//         createTitle.classList.add('create-title');
//         const createYear = document.createElement('p');
//         createYear.classList.add('create-year');

//         createTitle.innerHTML = `${elem.Title}`;
//         createYear.innerHTML = `${elem.Year}`;
//         createImg.src = `${elem.Poster}`;
//         createImg.alt = 'image';

//         createDiv.appendChild(createTitle);
//         createDiv.appendChild(createImg);
//         createDiv.appendChild(createYear);
//         main.appendChild(createDiv);

//     })
//     }
//     showData(dataSearch);
// console.log(dataSearch);
// }
// getData();

// form.addEventListener("submit", (elem) => {
//     elem.preventDefault();
//     main.innerHTML = '';
//     getData();
//     const searchWord = search.value;
//     if (searchWord) {
//         showData(searchOmdb + searchWord);
//         search.value = "";
//     }
// });
// без вынесения функции окончание









// API information.
// const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// // Selecting our Elements.
// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");
// /* call the showMovies function that requests the movie data from the Api using fetch.
//  Then it puts those data in the main HTML tag by creating elments for those data. */
// showMovies(apiUrl);
// function showMovies(url){
//     fetch(url).then(res => res.json())
//     .then(function(data){
//     data.results.forEach(element => {
//       // Creating elemnts for our data inside the main tag. 
//         const el = document.createElement('div');
//         const image = document.createElement('img');
//         const text = document.createElement('h2');

//         text.innerHTML = `${element.title}`;
//         image.src = IMGPATH + element.poster_path;
//         el.appendChild(image);
//         el.appendChild(text);
//         main.appendChild(el);
//     }); 
// });
// }

// // Prevent the Form from submitting if the search bar is empty.
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     main.innerHTML = '';

//     const searchTerm = search.value;
//  /* Adding the value wriiten in the search bar to the search Api,
//     in order to get the movies we search for. */
//     if (searchTerm) {
//         showMovies(SEARCHAPI + searchTerm);
//         search.value = "";
//     }
// });
