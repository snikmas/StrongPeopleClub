import { coaches, gallery } from './data.js';
const n = 1;
let coachesHTML = '';
let galleryHTML = document.querySelector('.carousel').innerHTML;
let galleryNumber = 3;

// good
function scrollDown(x, y){
  window.scrollBy(x, y);
} 


// carouselGallery
function galleryPhoto(){

  galleryHTML = '';
  for (let i = 1; i < 3; i++){
    galleryHTML  += `
      <div class='photo-${i}'><img src="assets/gallery-${i}.png"></div>
    `
    }

}

galleryPhoto();

document.querySelector('.arrow .gallery.right').addEventListener('click', arrowGallery(1));
document.querySelector('.arrow.gallery.left').addEventListener('click', arrowGallery(-1));

function arrowGallery(n){

  galleryNumber++;
  galleryHTML = '';
  if (n > 0){
    n = n + 1 > 5 ? 1 : n++;
    for(let i = galleryNumber - 3; i < galleryNumber + 3; i++) {
      galleryHTML += `
        <div class='photo-${i}'><img src="assets/gallery-${i}.png"></div>
      `
    }
  }

  if (n < 0){
    n = n-- < 1 ? 5 : n--;
    for(let i = galleryNumber - 3; i < galleryNumber + 3; i++) {
      galleryHTML += `
        <div class='photo-${i}'><img src="assets/gallery-${i}.png"></div>
      `
    }
  }
}



// carousel our-team

// when we open the site, there are should be ready some photos

function carouselCoaches(n) {
  
  for (let i = 1; i <= n; i++){
    coachesHTML += document.querySelector(`.coach .c-${i} .coach-info`).innerHTML = `
    <h6 class="name">${coaches[i].name}</h6>
    <span>${coaches[i].disciplines}</span>
    <p>ABOUT ME</p>
    `;
    document.querySelector(`.c-${i}`).style.backgroundImage = `url('/assets/avatar-${i}.jpg')`;
  }
}
carousel(3)
  
document.getElementsByClassName('arrow right').addEventListener('click', carousel);

// for(let i = 0; i < 3; i++){
//   document.querySelector(`.photo-${i}`).innerHTML = `
//   <img src="assets/gallery-${i}.png">
//   `
// }

document.querySelector(".arrow.left").addEventListener('click', carousel);


