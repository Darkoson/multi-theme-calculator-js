let themesSelectors = document.querySelectorAll(".templates > li");
let slide = document.getElementById("slide");

themesSelectors.forEach((selector) => {
  selector.addEventListener("click", changeTheme);
});

function changeTheme(e) {
  let id = e.target.attributes.id.value;
  slideTo(id);
  document.body.className = "theme-"+id;
}

function slideTo(id) {
  let list = slide.children;
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains(id)) {
      list[i].classList.remove("d-none");
    } else {
      list[i].classList.add("d-none");
    }
  }
}
