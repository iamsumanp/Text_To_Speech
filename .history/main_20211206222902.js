//ok what are we building(I DONT KNOW DUDE)
//make a array with the image and label so that we can loop them with for loop and append to grid item div class
let gridContainer = document.querySelector(".gridContainer");
let grid_item = document.createElement("div");

const ImagesAndText = [
  {
    image: "angry.jpeg",
    text: "i am angry",
  },
  {
    image: "bathroom.jpg",
    text: "i am angry",
  },
  {
    image: "hurt.png",
    text: "",
  },
  {
    image: "play.jpeg",
    text: "i am angry",
  },
  {
    image: "sad.jpg",
    text: "i am angry",
  },
  {
    image: "scared.png",
    text: "i am angry",
  },
  {
    image: "sleepy.jpg",
    text: "i am angry",
  },
];

grid_item.classList.add("grid-item");
gridContainer.appendChild(grid_item);
grid_item.innerHTML = "efjs";
// function startFunction() {
//   //   console.log("fekj");
//   grid_item.innerHTML = "booyah";
// }
