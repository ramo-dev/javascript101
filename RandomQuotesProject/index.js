document.addEventListener('DOMContentLoaded', function() {
  

  const username = document.querySelector('.name')
  const message = document.querySelector('.message')
  const card = document.querySelector('.quote-preview')
  const randomize = document.querySelector('.btn')
  const body = document.querySelector('html')


  let quoteMessage = {};
  let Gallery = {};
  body.style.backgroundImage = "url('https://source.unsplash.com/6J--NXulQCs/1920x1080')";


  card.innerHTML = `<div class="card">
  <div class="header">
    <div class="image"></div>
    <div>
      <p class="name">Nelson Mandela</p>
    </div>
  </div>
  
  <p class="message">
      The greatest glory in living lies not in never falling, but in rising every time we fall.
  </p>
  </div>`
  
  async function getQuotes(url){
      await fetch(url)
      .then(response => {
       if(!response.ok){
          throw new Error('Failed to fetch data!')
       }
       else{
          console.log('Success: ', response.status)
          return response.json()
       }  
      }).then(data=>{
          quoteMessage = data;
          // console.log(typeof(quoteMessage))
       })
       
  }
  
  getQuotes('https://type.fit/api/quotes')
  .then(()=>{

      randomize.addEventListener('click', ()=>{
          let randomQuote = Math.floor(Math.random() * quoteMessage.length)
          let random =  quoteMessage[randomQuote];
          card.querySelector('.name').textContent=random.author;
          card.querySelector('.message').textContent=random.text;
          
      })
      
        });
  

  async function getPhotos(url){
    await fetch(url)
    .then(response =>  response.json())
    .then(data =>{
      Gallery = data;
    });
  }

  getPhotos('https://picsum.photos/v2/list')
  .then(()=> {
    randomize.addEventListener('click', ()=>{
      let randomPic = Math.floor(Math.random() *  Gallery.length);
      let random = Gallery[randomPic]
      body.style.background = `url('${random.download_url}')`;
  })

})

})
