// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })

const myCarouselElement = document.querySelector('#duebtn');
myCarouselElement.addEventListener('click', () => {
    document.getElementById("modalContent").innerHTML = "hello manish";
})
