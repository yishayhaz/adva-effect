document
  .querySelectorAll(".adva")
  .forEach((btn) =>
    btn.addEventListener("mousedown", (e) => handleMouseMove(e, btn))
  );

function handleMouseMove(e, elem) {
  let posX = e.offsetX;
  let posY = e.offsetY;

  if (posX >= 0 && posX <= elem.offsetWidth) {
    elem.style.setProperty("--x", posX + "px");
  }
  if (posY >= 0 && posY <= elem.offsetHeight) {
    elem.style.setProperty("--y", posY + "px");
  }

  elem.style.setProperty("--animation", "adva 500ms ease");
  elem.addEventListener(
    "animationend",
    () => {
      elem.style.setProperty("--animation", "");
    },
    { once: true }
  );
}
