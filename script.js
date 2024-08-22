const toggleBtn = document.querySelector(".btn-toggle");
const mainContainerEl = document.querySelector(".main-container");
const display = document.querySelector(".display");
const gridBtnContainer = document.querySelector(".grid");

// Checking user preference for theme
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // dark mode
  mainContainerEl.classList.add("dark");
}

// Eventlistener for them toggling
toggleBtn.addEventListener("click", function () {
  mainContainerEl.classList.toggle("dark");
  if (mainContainerEl.classList.contains("dark")) {
    toggleBtn.innerHTML = `Light <i class="fa-solid fa-sun"></i>`;
  } else {
    toggleBtn.innerHTML = `Dark <i class="fa-solid fa-moon"></i>`;
  }
});

// Calculator Function Start
gridBtnContainer.addEventListener("click", function (e) {
  const operands = ["+", "-", "x", "/"];
  if (!e.target.closest(".cal-btn")) return;

  if (
    e.target.classList.contains("delete-char") ||
    e.target.closest(".delete-char")
  ) {
    display.value = display.value.toString().slice(0, -1);
    return;
  }

  if (e.target.closest(".equal")) {
    display.value = eval(
      display.value.includes("x")
        ? display.value.replace(/x/gi, "*")
        : display.value
    ).toFixed(2);
    return;
  }

  if (e.target.closest(".clear")) display.value = "";

  if (display.value === "" && operands.includes(e.target.textContent)) {
    return;
  }

  display.value += e.target.textContent === "AC" ? "" : e.target.textContent;
});
