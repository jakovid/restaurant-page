console.log('hello! this is not a test');
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { header } from "./header";

header.buildHeader();
loadMenuPage.buildMenuPage();