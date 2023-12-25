const btnel = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        // btnEl.disabled = true;
        btnel.innerText = "loading..."
        const response = await fetch(apiURL, options);
        const data = await response.json();
        // btnEl.disabled = false;

        btnel.innerText = "Tell Me A Joke";
        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "try agen later";
        // btnEl.disabled = false;
        btnel.innerText = "Tell Me A Joke";
        console.log(error);


    }
}
btnel.addEventListener("click", getJoke);


