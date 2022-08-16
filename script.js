// querySelectorAll not only select element, function also put "all elements" into a list called a node
const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.style.backgroundImage = "none";
    card.firstElementChild.style.visibility = "visible";
  })
})
