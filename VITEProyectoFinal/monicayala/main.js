import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar"
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projets } from "./pages/Projets/Prjets";
import { Divider } from "./components/Divider/Divider";
const header= document .querySelector("header");
header.innerHTML=Footer();
linkPage("#homelink",Home);
linkPage("#projetctslink", Projects);
Home();
changeTheme();
Footer.insertAdjacentHML("beforebegin", Divider());








