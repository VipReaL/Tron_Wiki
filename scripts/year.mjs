// Год в footer
function year() {
  let year = document.querySelector("#year");
  year.innerText = new Date().getFullYear();
}

export { year }