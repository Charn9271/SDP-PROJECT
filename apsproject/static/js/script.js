

function changeBackgroundColor(element, isHovered) {
  return document.querySelector(element).style.backgroundColor = isHovered ? "#D8C0A8" : "#F8F7F3";
}

document.querySelector(".services-tile").addEventListener("mouseenter", () => changeBackgroundColor(".services-tile", true), false);

document.querySelector(".services-tile").addEventListener("mouseleave", () => changeBackgroundColor(".services-tile", false), false);