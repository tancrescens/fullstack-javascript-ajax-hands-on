window.addEventListener("DOMContentLoaded", async function(){
    let goButton = document.querySelector("#goButton");
    goButton.addEventListener("click", ()=>handleGoBtn(pageContent));
    let pageContent = document.querySelector("#page");
})

function handleGoBtn(pageContent){
    let value = document.querySelector("input").value;
    setPage(value, pageContent)
}
async function setPage(value, pageContent){
    if(value == "1"){
        // getting respective page's 1 html
        let response = await axios.get("page1.html")
        let pageData = response.data
        pageContent.innerHTML = ``;
        pageContent.innerHTML = pageData;
    } else if(value == "2"){
        // getting respective page's html
        let response = await axios.get("page2.html")
        let pageData = response.data
        pageContent.innerHTML = ``;
        pageContent.innerHTML = pageData;
    } else if(value == "3"){
        // getting respective page's html
        let response = await axios.get("page3.html")
        let pageData = response.data
        pageContent.innerHTML = ``;
        pageContent.innerHTML = pageData;
    } else{
        pageContent.innerHTML = ``;
        pageContent.innerHTML = `Page not found`;
    }
}