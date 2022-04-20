
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogsArr = [];
  for (let key in dogs){
    let value = dogs[key];
    let dogLink = document.createElement("a");
    dogLink.innerHTML = key;
    dogLink.href = value;
    let dogList = document.createElement("li");
    dogList.appendChild(dogLink);
    dogList.classList.add("dog-link");
    dogsArr.push(dogList);
  }
  return dogsArr

}

export const attachDogLinks = ()=>{
  let dogLinks = dogLinkCreator();
  let dropdown = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(dog => {
    dropdown.appendChild(dog);
  });
}

attachDogLinks();
let dogNav = document.querySelector(".dog-nav");
dogNav.addEventListener("mouseenter",()=> {
  document.querySelector(".drop-down-dog-list").style.display = "block";
  
})
dogNav.addEventListener("mouseleave",()=> {
  document.querySelector(".drop-down-dog-list").style.display = "none";
})