var header = {
    content: document.getElementById('content'),
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
}

export { header };