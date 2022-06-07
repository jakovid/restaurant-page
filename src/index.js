import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { header } from "./header";
import { footer } from "./footer";

(function() {
    var buildWebsite = {
        init: function() {
            this.homePageInit();
            this.cacheDom();
            this.bindEvents();
            console.log('this is a big test');
        },
        cacheDom: function() {
            this.el = document.getElementById('content');
            this.homeTab = this.el.querySelector('.homeTab');
            this.menuTab = this.el.querySelector('.menuTab');
            this.contactTab = this.el.querySelector('.contactTab');
        },
        bindEvents: function(){
            this.homeTab.onclick = this.homePage;
            this.menuTab.onclick = this.menuPage;
            // this.contactTab.onclick = 
        },
        homePageInit: function() {
            header.buildHeader();
            loadHomePage.buildHomePage();
            footer.buildFooter();
        },
        homePage: function() {
            buildWebsite.el.innerHTML = '';
            header.buildHeader();
            loadHomePage.buildHomePage();
            footer.buildFooter();
            buildWebsite.cacheDom();
            buildWebsite.bindEvents();
        },
        menuPage: function() {
            buildWebsite.el.innerHTML = '';
            header.buildHeader();
            loadMenuPage.buildMenuPage();
            footer.buildFooter();
            buildWebsite.cacheDom();
            buildWebsite.bindEvents();
        }


    }

    buildWebsite.init();
})()