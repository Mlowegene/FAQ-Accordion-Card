const dropDown = document.querySelectorAll(".desc");

dropDown.forEach(arrow => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
  })
});