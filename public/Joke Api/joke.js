


const jokeDisplay = document.getElementById("showJoke")
const fullcont = document.querySelector(".container");
const getJoke = document.getElementById("getJoke")
const jokeApi = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"



const joke = () => {

    fetch(jokeApi)
    .then(resolve => resolve.json()) 
    .then(data => {

        jokeDisplay.textContent = `${data.joke}`

    })


    

    // .then((resolve, reject) => {
    //     console.log(resolve);
    //     let data = resolve.json();

    //     console.log(data);
    
        
    // })



    // .catch(reject) {
    //     console.log("You experienced a network failiure");
        
    // }
}

getJoke.addEventListener("click", joke)

joke();

const cont = document.createElement("h3")
cont.textContent = "Jokes only programmers can relate😂"
cont.style.color = "white"

// fullcont.appendChild(cont)