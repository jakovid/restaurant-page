var loadHomePage = {
    content: document.getElementById('content'),
    buildHomePage: function(){
        this.buildHeader();
        this.buildBody();
        this.buildFooter();
    },
    buildHeader: function() {
        //create elements
        let headerContainer = document.createElement('div');
        let headerTitle = document.createElement('div');
        let headerSubtitle = document.createElement('div');
        let tabContainer = document.createElement('div');
        let homeTab = document.createElement('button');
        let menuTab = document.createElement('button');
        let contactTab = document.createElement('button');
        //add class names to elements
        headerContainer.className = "headerContainer";
        headerTitle.className = "headerTitle";
        headerSubtitle.className = "headerSubtitle";
        tabContainer.className = "tabContainer";
        homeTab.className = "homeTab";
        menuTab.className = "menuTab";
        contactTab.className = "contactTab";
        //add inner text to buttons
        headerTitle.innerText = "La Luna";
        headerSubtitle.innerText = "Italiano Ristorante";
        homeTab.innerText = "Home";
        menuTab.innerText = "Menu";
        contactTab.innerText = "Contact";
        //append elements
        tabContainer.append(homeTab,menuTab,contactTab);
        headerContainer.append(headerTitle,headerSubtitle,tabContainer);
        this.content.appendChild(headerContainer);
    },
    buildBody: function(){
        //create elements
        let bodyContainer = document.createElement('div');
        let bodyTitle = document.createElement('div');
        let bodyTagline = document.createElement('div');
        let bodyImage = document.createElement('img');
        let bodyCallToAction = document.createElement('div');
        //add class names to elements
        bodyContainer.className = "bodyContainer";
        bodyTitle.className = "bodyTitle";
        bodyTagline.className = "bodyTagline";
        bodyImage.classname = "bodyImage";
        bodyCallToAction.classname = "bodyCTA";
        //add innertext to Elements
        bodyTitle.innerText = "Taiwan's Best Italian Restaurant!";
        bodyTagline.innerText = "Open to the world since 2022!";
        bodyCallToAction.innerText = "Order online or visit our nearest location!";
        //append elements
        bodyContainer.append(bodyTitle,bodyTagline,bodyImage,bodyCallToAction);
        this.content.appendChild(bodyContainer);
        console.log('body test!');
    },
    buildFooter: function(){
        // create elements
        let footerContainer = document.createElement('div');
        let footerText = document.createElement('div');
        //add class names to elements
        footerContainer.className = "footerContainer";
        footerText.className = "footerText";
        //add innertext to elements
        footerText.innerText = "This website was built by Jacob";
        //append elements
        footerContainer.appendChild(footerText);
        this.content.appendChild(footerContainer);
        console.log('foot test!');
    }

};

export { loadHomePage };