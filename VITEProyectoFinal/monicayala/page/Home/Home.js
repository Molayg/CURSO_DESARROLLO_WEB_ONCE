import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">
<p>Soy</p>
<h1>Mónica Ayala Guañuna</h1>
<p>MÁSTER EN DISEÑO</p>
<a href="mailto:molayg61@gmail.com"></a>
</section>`;
};
