import "./Navbar.css";
export const changeTheme = () => {
const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("light");
changeText();
});
};
export const changeText = () => {
const themeBtn = document.querySelector("#themeBtn");
if (themeBtn.innerText === "☀") {

<<<<<<< HEAD

=======
>>>>>>> e912bde741248ddf046c18e5f5da3dc5f740e08f
themeBtn.innerText = "☾";
} else {
themeBtn.innerText = "☀";
}
};
<<<<<<< HEAD
export const Navbar = () => `
<nav>
<h2>Mónica Ayala Guañuna</h2>
=======

export const Navbar = () => `

<nav>
<h1>PORTFOLIO</h1>
>>>>>>> e912bde741248ddf046c18e5f5da3dc5f740e08f
<ul>
<li>
<a href="#" id="homelink">Home</a>
</li>
<li>
<a href="#" id="projectslink">Projects</a>
</li>
<li>
<button id="themeBtn">☀</button>
</li>
</ul>
</nav>
`;