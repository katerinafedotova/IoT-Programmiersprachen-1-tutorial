const images = [
    {
        src: "./assets/1.jpeg",
        alt: "sacura tree",
        description: "This is a sacura tree."
    },
    {
        src: "./assets/2.jpeg",
        alt: "forest rapids",
        description: "These are forest rapids."
    },
    {
        src: "./assets/3.jpeg",
        alt: "lake in the mountains",
        description: "This is a lake in the mountains."
    },
    {
        src: "./assets/4.jpeg",
        alt: "sunset in the mountains",
        description: "This is sunset in the mountains."
    },
    {
        src: "./assets/5.jpeg",
        alt: "another lake in the mountains",
        description: "This is another lake in the mountains."

    },
    {
        src: "./assets/6.jpeg",
        alt: "lonely tree in the sunset",
        description: "This is a lonely tree in the sunset."
    },
]

let currentImage = 0;

const image = document.querySelector('.image')
const description = document.getElementById("description")
const nextBtn = document.getElementById("next-button")
const prevBtn = document.getElementById("prev-button")

const goToNextImage = () => {
    if (currentImage === images.length - 1) {
        currentImage = -1;
    }
    image.src = images[++currentImage].src
    updateDescriptionAndAlt()
}

const goToPrevImage = () => {
    if (currentImage === 0) {
        currentImage = images.length;
    }

    image.src = images[--currentImage].src
    updateDescriptionAndAlt()
}

const updateDescriptionAndAlt = () => {
    image.setAttribute("alt", images[currentImage].alt)
    description.innerHTML = images[currentImage].description
}

nextBtn.addEventListener("click", goToNextImage)
prevBtn.addEventListener("click", goToPrevImage)