const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const refresh = document.querySelector(".refresh");
const title = document.querySelector(".title");
console.log(title);

let randomPlay1 = Math.floor(Math.random() * 6) + 1;
let randomPlay2 = Math.floor(Math.random() * 6) + 1;

refresh.addEventListener("click", () => {
  randomPlay1 = Math.floor(Math.random() * 6) + 1;
  randomPlay2 = Math.floor(Math.random() * 6) + 1;

  dice1.setAttribute("src", `dice${randomPlay1}`);
  dice2.setAttribute("src", `dice${randomPlay2}`);
});

dice1.setAttribute("src", `images/dice${randomPlay1}.png`);
dice2.setAttribute("src", `images/dice${randomPlay2}.png`);

if (randomPlay1 > randomPlay2) {
  title.textContent = "Player1 Wins!";
} else if (randomPlay1 < randomPlay2) {
  title.textContent = "Player2 Wins!";
} else {
  title.textContent = "Wow,it's a draw!";
}
