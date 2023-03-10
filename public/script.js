const searchButton = document.getElementById(".searchBar");

//modals and buttons
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const loginButton = document.querySelector(".loginButton");
const signUpButton = document.querySelector(".signUpButton");
const resultsModal = document.querySelector(".resultsModal");

//turns on login/signup modal
function toggleModal() {
    modal.classList.toggle("show-modal");
}
//turns off modal when clicked outside of modal
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
//opens modal if it exists on the page
if (trigger) {
trigger.addEventListener("click", toggleModal);
};
// close button on modal
if (closeButton) {
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
};
//login button on modal
if (loginButton) {
loginButton.addEventListener("click", showLogin);
signUpButton.addEventListener("click", showSignUp);
};
//modals
const loginModal = document.querySelector(".Login-Modal");
const signUpModal = document.querySelector(".signUp");

//opens modal on login click
function showLogin() {
    let loginModal = document.querySelector(".Login-Modal");
    toggleModal();
    loginModal.classList.remove("hidden");
}

const loginCloseButton = document.querySelector(".login-close-button");
// closes modal if it exists on the page
if (loginCloseButton) {
loginCloseButton.addEventListener("click", toggleLoginModal);
};
//sets modal to and from "hidden" 
function toggleLoginModal() {
    loginModal.classList.add("hidden");
}
// toggles signup modal
function showSignUp() {
    let signUpModal = document.querySelector(".signUp");
    toggleModal();
    signUpModal.classList.remove("hidden");
}

const signupCloseButton = document.querySelector(".signup-close-button");
// closes the signup modal if it exists on the page
if (signupCloseButton) {
signupCloseButton.addEventListener("click", toggleSignupModal);
};

function toggleSignupModal() {
    signUpModal.classList.add("hidden");
}

// The below code was Ray's original front-end API call, it was moved to back-end
// I am keeping this in the code for future reference should it ever be needed.
/*
 let results = {
     fetchMovie: function (movie) {
         fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&page=1&include_adult=false&query=" + movie)
             .then((response) => response.json()).then((data) => this.displayResults(data));
     },

     displayResults: function (data) {
         data = data.results[0];
         let name = data.original_title;
         let description = data.overview;
         let reviews = data.vote_average;
         console.log(data);
         console.log(name)
         console.log(description)
         console.log(reviews)
         document.body.style.backgroundImage = "url(\"https://source.unsplash.com/1600x900/?movie&query=" + name + ")";
     },

        //this section should populate multiple movie suggestions, it does not work yet
     fetchResults: function (movie) {
         fetch("https://api.themoviedb.org/3/search/" + movie + "?" + apiKey + "&language=en-US&page=1&include_adult=false").then((response) => response.json()).then((data) => displayFeatures(data));

         function displayFeatures(data) {
             for (let i = 0; i < 6; i++) {
                 const thumbnail = data;/*thumbnail icon from API call
                 // calls the results and returns a thumbnail to each feature card, up to 6
                 document.querySelector(`.feature${i + 1}`).innerHTML = thumbnail;
             }
         }
     },
    
     search: function () {
         this.fetchMovie(document.querySelector(".searchBar").value);
         resultsModal.classList.remove("hidden");
     },
 };

 document.querySelector(".mainBtn").addEventListener("click", function () {
     results.search();
 });
 // allows for "enter" to be placed when searching instead of requiring a mouse click
 document.querySelector(".searchBar").addEventListener("keyup", function (event) {
     if (event.key == "Enter") {
         results.search();
     }
})
*/