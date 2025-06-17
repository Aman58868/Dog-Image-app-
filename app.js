let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() => {
    let link = await getImage();
    console.log(link)
    img.document.querySelector("#result");
    img.setAttribute("src", link)
    console.log(img);
})

async function getImage() {
    try {
        let res = await axios.get(url) 
            return res.data.message;
    } catch (e) {
        console.log("ERROR", e)
    }
}