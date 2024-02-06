const randomize = document.querySelector('.randomize')
const card = document.querySelector('.card')
const body = document.querySelector('body')


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
        console.log(typeof(quoteMessage))
     })
     
}



 getQuotes('https://type.fit/api/quotes')
  .then(()=>{

    
      randomize.addEventListener('click', (n)=>{
          n = 4;
        // body.innerHTML = `''`
        for(let i = 0; i < n;i++){

            let randomQuote = Math.floor(Math.random() * quoteMessage.length)
            let random =  quoteMessage[randomQuote];

            const card_template = `
            <figure class="card">
                <figcaption>
                    <blockquote>
                        <p class="review">${random.text}</p>
                    </blockquote>
                    <h3 class="name">${random.author}</h3>
                    <h4>Google Inc.</h4>
                    </figcaption>
            </figure>`

            body.innerHTML += card_template 
            // card.querySelector('.name').textContent=random.author;
            // card.querySelector('.message').textContent=random.text;
            
            // card.appendChild(card.innerHTML);
        }
          
      })
      
        });