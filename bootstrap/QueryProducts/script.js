let products = [];

async function GetGalleryJson() {
    await fetch('https://api.slingacademy.com/v1/sample-data/products')
        .then(response => {
            if (response.status == 200) {
                console.log('data fetched successfully');
                return response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            console.log(data.products);

            products = data.products;
            const container = document.querySelector('.container');

            function renderProducts(filteredArray) {
                container.innerHTML = '';
                if (filteredArray.length === 0) {
                    container.innerHTML = '<h1>No Item Found</h1>';
                } else {
                    filteredArray.forEach(element => {
                        container.innerHTML += `
                            <div class="col m-4">
                                <div class="card mt-2 " style="width: 18rem; height: 25rem">
                                    <img src="${element.photo_url}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.name}</h5>
                                        <p class="card-text">${element.description}</p>
                                        <a href="#" class="btn btn-primary">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }
            }

            renderProducts(products);

            document.querySelector('input').addEventListener('input', () => {
                const query = document.querySelector('input').value.toLowerCase();
                const filteredArray = products.filter(a => 
                    a.name.toLowerCase().includes(query) || a.description.toLowerCase().includes(query)
                );
                renderProducts(filteredArray);
            });

            document.querySelector('button').addEventListener('click', () => {
                // Handle click event here
                console.log('Button clicked');
            });
        });
}

GetGalleryJson();
