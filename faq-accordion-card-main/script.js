// import elements:
const womenDesktop = document.querySelector(".women-desktop");
const pattern = document.getElementById("bg-pattern");
const accordionBtn = document.getElementsByClassName("accordion__button");
const accordionBody = document.getElementsByClassName("accordion__body");
// change image:
let mediaQuery = window.matchMedia("(min-width: 54.25rem)");
womenDesktop.src = `./images/illustration-woman-online-desktop.svg`;
const changeImage = function (mediaQuery) {
  if (mediaQuery.matches) {
    womenDesktop.src = `./images/illustration-woman-online-desktop.svg`;
  } else {
    womenDesktop.src = `./images/illustration-woman-online-mobile.svg`;
  }
};

// eventlistener
mediaQuery.addEventListener("change", function () {
  changeImage(mediaQuery);
});

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    for (let j = 0; j < accordionBody.length; j++) {
      if (i !== j) {
        if (accordionBody[j].classList.contains("is_active")) {
          accordionBody[j].classList.remove("is_active");
          accordionBtn[j].classList.remove("collapsed");
        }
      }
    }
    accordionBody[i].classList.toggle("is_active");
    accordionBtn[i].classList.toggle("collapsed");
    console.log("check");
  });
}
