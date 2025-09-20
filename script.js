const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`You selected: ${btn.textContent}. Feature demo only!`);
  });
});
