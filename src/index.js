import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { header } from "./header";
import { footer } from "./footer";

(function() {
    var buildWebsite = {
        content: document.getElementById('content'),
        init: function() {
            this.cacheDom();
            // this.bindEvents();
            console.log('this is a big test');
            this.homePage();
        },
        cacheDom: function() {
            this.el = document.getElementById('content');
            this.homeTab = this.el.querySelector('homeTab');
            this.menuTab = this.el.querySelector('menuTab');
            this.contactTab = this.el.querySelector('contactTab')
        },
        bindEvents: function(){
            this.homeTab.onclick = buildWebsite.homePage;
            this.menuTab.onclick = buildWebsite.menuPage;
            // this.contactTab.onclick = 
        },
        homePage: function() {
            header.buildHeader();
            loadHomePage.buildHomePage();
            footer.buildFooter();
        },
        menuPage: function() {
            header.buildHeader();
            loadMenuPage.buildMenuPage();
            footer.buildFooter();
            console.log('click!');
        }


    }

    buildWebsite.init();
})()

// import { loadHomePage } from "./home";
// import { loadMenuPage } from "./menu";
// import { header } from "./header";
// import { footer } from "./footer";

// var buttons = {
//     home: document.getElementsByClassName('homeTab'),
//     menu: document.getElementsByClassName('menuTab'),
    

// }

// header.buildHeader();
// loadHomePage.buildHomePage();
// footer.buildFooter();