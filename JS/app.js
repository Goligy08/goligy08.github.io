console.log("its working!");

const contactBtn = document.getElementById("contactBtn")
const mobileProjectBtn = document.getElementById("mobile-projects")
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const exit = document.querySelector(".exit");
const darkBtn = document.querySelector(".dark");
const darkBtnMobile = document.querySelector(".dark-mobile")
const mobileHero = document.querySelector(".mobile-hero")
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");
const footer = document.querySelector(".footer");
const wave = document.querySelector(".wave");
const projects = document.querySelector(".projects");
const heroWave = document.querySelector(".hero-wave");
const heroImg = document.querySelector(".hero-img");
const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const project4 = document.querySelector(".project4");
const heroContact = document.querySelector(".hero-contact");
const javascriptProjects = document.querySelector(".javascript")
const logo = document.querySelector(".logo");
const project1Btn = document.getElementById("project1-btn");
const project2Btn = document.getElementById("project2-btn");
const project3Btn = document.getElementById("project3-btn");
const project4Btn = document.getElementById("project4-btn");
const projectModalContainer = document.getElementById("modal-container");
const projectModal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalExit = document.getElementById("modal-exit")
const modalAside = document.getElementById("modal-aside");
const jsProject1 = document.getElementById("javascript-project-1");
const jsProject2 = document.getElementById("javascript-project-2");
const jsProject3 = document.getElementById("javascript-project-3");
const colourOne = document.getElementById("colour1");
const colourTwo = document.getElementById("colour2");
const colourThree = document.getElementById("colour3");
const demoBtn = document.getElementById("demo");
const repoBtn = document.getElementById("repo");


contactBtn.addEventListener("click", function () {
  window.open("../contact.html", "_self");

})

mobileProjectBtn.addEventListener('click', function () {
  window.scrollTo(0, projects.offsetTop);
  menu.classList.remove("show");
  hamburger.classList.remove("hide");
})

hamburger.addEventListener("click", function () {
  menu.classList.add("show");
  hamburger.classList.add("hide");
});

exit.addEventListener("click", function () {
  menu.classList.remove("show");
  hamburger.classList.remove("hide");
});

// Toggle dark mode
darkBtn.addEventListener("click", function () {
 darkMode();
});

darkBtnMobile.addEventListener("click", function() {
darkMode();
});

function darkMode() {
  menu.classList.toggle("darkTheme");
  hero.classList.toggle("darkTheme");
  mobileHero.classList.toggle("darkTheme");
  nav.classList.toggle("darkTheme");
  footer.classList.toggle("darkTheme");
  wave.classList.toggle("darkTheme");
  heroContact.classList.toggle("darkTheme");
  projects.classList.toggle("darkTheme");
  heroWave.classList.toggle("darkTheme");
  project1.classList.toggle("darkTheme");
  project2.classList.toggle("darkTheme");
  project3.classList.toggle("darkTheme");
  project4.classList.toggle("darkTheme");
  heroImg.classList.toggle("darkTheme");
  logo.classList.toggle("darkTheme");
  javascriptProjects.classList.toggle("darkTheme");
}

modalExit.addEventListener('click', function() {
    projectModalContainer.classList.remove('show')
    console.log("modal exit button clicked")
    console.log("modal view closed")
})

// Open project 1 modal - see more view
project1Btn.addEventListener("click", function () {
  
  projectModalContainer.classList.add("show");
  console.log("project button clicked");
  modalImg.src = "../IMGS/OutfitModal.png";
  modalTitle.innerHTML = "Outfit";
  modalDescription.innerHTML =
    "Outfit aims to be a modern, clean easy to use retail clothing site. Featuring a simple & easy to navigate UI.<br><br> This fully funtional e-commerce front end aims to replicate many popular e-commerce clothing sites and implements a variety of features including favourites list as well as fully functional shopping cart & payment screens.<br><br> The UI contains a highly repsonsive custom built theme, which is adaptive to many major devices.";
  colourOne.style.backgroundColor = "#b2babb";
  colourTwo.style.backgroundColor = "#1a1a1a";
  colourThree.style.backgroundColor = "#000000";

  const outfitDemo = document.createElement('button');
  outfitDemo.classList.add("demo");
  outfitDemo.innerHTML = "Demo"
  outfitDemo.onclick = function() {
    window.open("../E-Commerce Project/index.html")
  }
  projectModalContainer.append(outfitDemo);



  const outfitRepo = document.createElement('button');
  outfitRepo.classList.add("repo");
  outfitRepo.innerHTML = "Repo"
  outfitRepo.onclick = function() {
    window.open("https://github.com/Goligy08/Outfit-E-Commerce")
  }
  projectModalContainer.append(outfitRepo);




 
});



//Open Project 2 Modal - See more view
project2Btn.addEventListener("click", function () {
  
  projectModalContainer.classList.add("show");
  console.log("porject 2 clicked");
  modalImg.src = "../IMGS/HairdressingBG.svg";
  modalTitle.innerHTML = "Damiens'";
  modalDescription.innerHTML =
  "This single page website demonstrates the tools & features employed on a fully responsive business website. The project aims to project a modern and user friendly UI to display business information, news and contact details in a clear and purposeful fashion.<br><br> The project is fully repsonsive to most major devices allowing for an adaptive experience.";
  colourOne.style.backgroundColor = "#b5b0b0";
  colourTwo.style.backgroundColor = "#e4e4e5";
  colourThree.style.backgroundColor = "#da291b";

  const hairedressingDemo = document.createElement('button');
  hairedressingDemo.classList.add("demo");
  hairedressingDemo.innerHTML = "Demo"
  hairedressingDemo.onclick = function() {
    window.open("../DamiensHairdressing/index.html")
  }
  projectModalContainer.append(hairedressingDemo);


  const hairedressingRepo = document.createElement('button');
  hairedressingRepo.classList.add("repo");
  hairedressingRepo.innerHTML = "Repo"
  hairedressingRepo.onclick = function() {
    window.open("https://github.com/Goligy08/StaticBusinessSite")
  }
  projectModalContainer.append(hairedressingRepo);

  
});


//Open Project 3 Modal - See more view
project3Btn.addEventListener("click", function () {
  
  projectModalContainer.classList.add("show");
  console.log("project 3 clicked");
  modalImg.src = "../IMGS/RecipeModal.svg";
  modalTitle.innerHTML = "Meal Mate";
  modalDescription.innerHTML =
  "Meal Mate is a web application which aims to provide users with recipe suggestions. The app uses 'The MealDB' API in order to display meal recipes based on search term or filtered option.<br><br> Users query the API by providing or selecting a main ingredient. Users can also maintain a list of favourite recipes for consideration using the favourite feature without the need for registering an account.";
  colourOne.style.backgroundColor = "#2ecc71";
  colourTwo.style.backgroundColor = "#34aa6d";
  colourThree.style.backgroundColor = "#ffffff";

  const recipeDemo = document.createElement('button');
  recipeDemo.classList.add("demo")
  recipeDemo.innerHTML = "Demo"
  recipeDemo.onclick = function() {
    window.open("../RecipeApp/index.html")
  }
  projectModalContainer.append(recipeDemo);


  const recipeRepo = document.createElement('button');
  recipeRepo.classList.add("repo")
  recipeRepo.innerHTML = "Repo"
  recipeRepo.onclick = function() {
    window.open("https://github.com/Goligy08/RecipeApp")
  }
  projectModalContainer.append(recipeRepo);

  
});



//Open Project 4 Modal - See More View
project4Btn.addEventListener("click", function () {
  let movieLocation = "../MovieApp/index.html"
  projectModalContainer.classList.add("show");
  console.log("project 4 clicked");
  modalImg.src = "../IMGS/TheMovieDBbg2.svg";
  modalTitle.innerHTML = "The Movie DB";
  modalDescription.innerHTML =
  "The Movie Database enables users to search for movies and TV Shows.<br><br> This single page web application employs the use of 'TMDB' (The Movie Database) API to populate movies and TV Shows. The user is able to search for content either by entering a search query or by filtering data based on catgeory. <br><br>Hovering over each movie entry displays the description. The Movie Database API allows users to locate & explore new movies/genres without the need for an account.<br><br> This application could be further enhanced to incorporate user accounts to allow users to store favourites & rate movies.";
  colourOne.style.backgroundColor = "#1A1A1A";
  colourTwo.style.backgroundColor = "#c3073f";
  colourThree.style.backgroundColor = "#E89453";

  const movieDemo = document.createElement('button');
   movieDemo.classList.add("demo");
  movieDemo.innerHTML = "Demo"
  movieDemo.onclick = function() {
    window.open("../MovieApp/index.html")
  }
  projectModalContainer.append(movieDemo);


  const movieRepo = document.createElement('button');
   movieRepo.classList.add("repo");
  movieRepo.innerHTML = "Repo"
  movieRepo.onclick = function() {
    window.open("https://github.com/Goligy08/MovieApp")
  }
  projectModalContainer.append(movieRepo);

  
});



// Javascript Projects Modal

// Open Javascript 1 Modal
jsProject1.addEventListener("click", function () {
  projectModalContainer.classList.add("show");
  console.log("js project 1 clicked");
  modalImg.src = "../IMGS/WormModal.svg";
  modalTitle.innerHTML = "Worm";
  modalDescription.innerHTML =
  "Adaptation of the popular snake game found on mobile phones in the early 2000s. The user changes the direction of the worm using the arrow keys in order to capture the apple.Written in vanilla JavaScript.";
  colourOne.style.backgroundColor = "#834E2B";
  colourTwo.style.backgroundColor = "#477A1E";
  colourThree.style.backgroundColor = "#EFBDD9";

  const wormDemo = document.createElement('button');
   wormDemo.classList.add("demo");
  wormDemo.innerHTML = "Demo"
  wormDemo.onclick = function() {
    window.open("../Snake/index.html");
  }
  projectModalContainer.append(wormDemo);


  const wormRepo = document.createElement('button');
   wormRepo.classList.add("repo");
  wormRepo.innerHTML = "Repo"
  wormRepo.onclick = function() {
    window.open("https://github.com/Goligy08/Snake")
  }
  projectModalContainer.append(wormRepo);

 
});



// Open Javascript 2 Modal
jsProject2.addEventListener("click", function () {
  projectModalContainer.classList.add("show");
  modalImg.src = "../IMGS/PacmanModal.svg";
  modalTitle.innerHTML = "Pacman";
  modalDescription.innerHTML =
  "The classic arcade game! The user controls pacman around the gameboard using the WASD keys in order to capture pac-pellets. Pacman must evade the ghosts (Pinky, blinky, Inky & Clyde) & capture all pellets in order to win. Written in vanilla JavaScript.";
  colourOne.style.backgroundColor = "#3B4254";
  colourTwo.style.backgroundColor = "#EDDE37";
  colourThree.style.backgroundColor = "#F6B146";

  const pacmanDemo = document.createElement('button');
   pacmanDemo.classList.add("demo");
   pacmanDemo.innerHTML = "Demo"
   pacmanDemo.onclick = function() {
    window.open("../Pacman/index.html")
  }
  projectModalContainer.append(pacmanDemo);


  const pacmanRepo = document.createElement('button');
   pacmanRepo.classList.add("repo");
   pacmanRepo.innerHTML = "Repo"
   pacmanRepo.onclick = function() {
    window.open("https://github.com/Goligy08/Pacman")
  }
  projectModalContainer.append(pacmanRepo);

});


// Open Javascript 3 Modal
jsProject3.addEventListener("click", function () {
  projectModalContainer.classList.add("show");
  modalImg.src = "../IMGS/BreakoutModal.svg";
  modalTitle.innerHTML = "Breakout";
  modalDescription.innerHTML =
  "The user controls the paddle using the left & right arrow keys and must bounce the ball against the opposing blocks. Written in vanilla Javascript";
  colourOne.style.backgroundColor = "#88C0D0";
  colourTwo.style.backgroundColor = "#BC2020";
  colourThree.style.backgroundColor = "#2BB439";

  const breakoutDemo = document.createElement('button');
   breakoutDemo.classList.add("demo");
   breakoutDemo.innerHTML = "Demo"
   breakoutDemo.onclick = function() {
    window.open("../breakout/index.html")
  }
  projectModalContainer.append(breakoutDemo);


  const breakoutRepo = document.createElement('button');
  breakoutRepo.classList.add("repo");
  breakoutRepo.innerHTML = "Repo"
  breakoutRepo.onclick = function() {
   window.open("https://github.com/Goligy08/Breakout")
 }
 projectModalContainer.append(breakoutRepo);

 
});


// Animate Elements with Gsap

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title", { opacity: 0, duration: 1, y: -50 });
gsap.from(".hero-copy", { opacity: 0, duration: 1, y: -50 });
gsap.from(".hero-contact", { opacity: 0, duration: 1, y: -50 });
gsap.from(".logo", { opacity: 0, duration: 1, x: -50 });
gsap.from(".desk-menu", { opacity: 0, duration: 1, x: 100 });
gsap.from(".project1", {
  scrollTrigger: ".project1",
  opacity: 0,
  duration: 1,
  x: -400,
});
gsap.from(".project2", {
  scrollTrigger: ".project2",
  opacity: 0,
  duration: 1,
  x: 400,
});
gsap.from(".project3", {
  scrollTrigger: ".project3",
  opacity: 0,
  duration: 1,
  x: -400,
});
gsap.from(".project4", {
  scrollTrigger: ".project4",
  opacity: 0,
  duration: 1,
  x: 400,
});
