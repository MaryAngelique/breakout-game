const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");

// Rules and close event handlers
rulesBtn.addEventListener("click", () => rules.classList.add("show"));
closeBtn.addEventListener("click", () => rules.classList.remove("show"));