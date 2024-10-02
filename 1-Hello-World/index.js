window.addEventListener("DOMContentLoaded", async function(){
    let url = `https://4geeksacademy.github.io/exercise-assets/txt/hello.txt`
    let response = await axios.get(url);

    let content = document.querySelector("#content");
    console.log(response.data)
    let html = `${response.data}`
    content.innerHTML = html
})