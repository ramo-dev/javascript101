//Generate qr codes using go qr api
const button = document.querySelector('button')
document.querySelector('img').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.github.com/ramo-dev`
async function fetchURL(url){
    const res = await fetch(url);//fetch the url
    const data = await res.blob();//convert the rsponse to blob to easily convert to url
    let imgURL = URL.createObjectURL(data);//convert blob data to url
    document.querySelector('img').src = imgURL
}

button.addEventListener("click", ()=>{
    const input = document.querySelector('input').value//get value from the user
    let nurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
    fetchURL(nurl)
})