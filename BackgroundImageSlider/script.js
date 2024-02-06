const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const cCarousel = document.querySelector('#cCarousel-inner')
const image = document.querySelector('.image')



let Gallery = {};

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

  prev.addEventListener("click", () => {
    if (!leftValue == 0) {
      leftValue -= totalMovementSize;
      if (leftValue < 0) {
        leftValue = 0; // Reset to 0 if it goes below 0
      }
      cCarouselInner.style.left = leftValue + "px";
    }
  });
  
  next.addEventListener("click", () => {
    const carouselVpWidth = carouselVp.getBoundingClientRect().width;
    if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
      leftValue -= totalMovementSize;
      if (carouselInnerWidth - Math.abs(leftValue) <= carouselVpWidth) {
        leftValue = 0; // Reset to 0 if it reaches the end
      }
      cCarouselInner.style.left = leftValue + "px";
    }
  });
  

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}


async function getPhotos(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      Gallery = data;
      
      for (let i = 0; i < 6; i++) {
        let randomPic = Math.floor(Math.random() * Gallery.length);
        let random = Gallery[randomPic];
        let pic_url = random.download_url;

        const articleTemplate = `
          <article class="cCarousel-item">
            <img src="${pic_url}" class="image">
            <div class="infos">
              <h3>Title ${i + 1 + 1} / 6</h3>
              <button type="button">see</button>
            </div>
          </article>
        `;
  
        cCarousel.innerHTML += articleTemplate;
      }

      // Recalculate carouselInnerWidth after all images have been loaded
      carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  getPhotos('https://picsum.photos/v2/list');