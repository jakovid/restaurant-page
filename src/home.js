// function loadHomePage() {
// let content = document.getElementById('content');
// let div = document.createElement('div');
// div.innerText = "Hello World"
// content.appendChild(div);

// }

var loadHomePage = {
    content: document.getElementById('content'),
    buildHomePage: function(){
        this.buildTabBrowse();
    },
    buildTabBrowse: function() {
        //create elements
        let tabContainer = document.createElement('div');
        let homeTab = document.createElement('button');
        let menuTab = document.createElement('button');
        let contactTab = document.createElement('button');
        //add class names to elements
        tabContainer.className = "tabContainer";
        homeTab.className = "homeTab";
        menuTab.className = "menuTab";
        contactTab.className = "contactTab";
        //add inner text to buttons
        homeTab.innerText = "Home";
        menuTab.innerText = "Menu";
        contactTab.innerText = "Contact";
        //append elements
        tabContainer.append(homeTab,menuTab,contactTab);
        this.content.appendChild(tabContainer);
    },
    test: function() {
        let div = document.createElement('div');
        div.innerText = "Hello World"
        content.appendChild(div);
    },

}


export { loadHomePage };