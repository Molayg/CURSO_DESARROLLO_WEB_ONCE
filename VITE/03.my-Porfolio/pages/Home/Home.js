import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="home">

<h2>Mónica Ayala Guañuna</h2>
<p>GRAPHIC DESIGNER</p>
<p>Máster en Diseño</p>
<p>Universidad Complutense de Madrid</p>

</section>`;
};