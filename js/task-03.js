const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


images.forEach((image) => {
  const imageElement = document.querySelector(".gallery");

  const newImageList = document.createElement("li");
  newImageList.classList.add("item");
  
  imageElement.appendChild(newImageList);

  newImageList.insertAdjacentHTML(
    "afterbegin",
    `<img class="newImage" src=${image.url} alt=${image.alt}>`
  );

  console.log(imageElement);
}, 0);
















// images.forEach((image) => {
//   const newImageList = document.createElement("li");
//   newImageList.classList.add("item");

//   const newImage = document.createElement("img");
//   newImage.classList.add("img");
//   newImage.src = image.url;
//   newImage.alt = image.alt;

//   newImageList.appendChild(newImage);
//   console.log(newImageList);

//   const allNewImages = document.querySelector(".gallery");
//   allNewImages.appendChild(newImageList);
// }, 0);