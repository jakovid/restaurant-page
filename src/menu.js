var loadMenuPage = {
    content: document.getElementById('content'),
    buildMenuPage: function(){
        //create elements
        let menuContainer = document.createElement('div');
        let menuTitle = document.createElement('div');
        //create fries
        let friesBox = document.createElement('div');
        let friesPic = document.createElement('img');
        let friesName = document.createElement('div');
        let friesAbout = document.createElement('div');
        //create salad
        let saladBox = document.createElement('div');
        let saladPic = document.createElement('img');
        let saladName = document.createElement('div');
        let saladAbout = document.createElement('div');
        //add src for pictues
        friesPic.src = '../img/fries.png';
        saladPic.src = '../img/salad.png';

        //add class names to elements
        menuContainer.className = 'menuContainer';
        menuTitle.className = 'menuTitle';
        friesBox.className = "foodBox";
        friesPic.className = "foodPic";
        friesName.className = "foodName";
        friesAbout.className = "foodAbout";
        saladBox.className = "foodBox";
        saladPic.className = "foodPic";
        saladName.className = "foodName";
        saladAbout.className = "foodAbout";
        //add innertext to elements
        friesName.innerText = "Garlic Fries";
        friesAbout.innerText = "Fresh cut spuds"
        saladName.innerText = "Green Goddess Salad";
        saladAbout.innerText = "You've seen this one too many times on tiki toki";

        //append elements
        friesBox.append(friesPic,friesName,friesAbout);
        saladBox.append(saladPic,saladName,saladAbout);
        menuContainer.append(friesBox,saladBox);
        this.content.appendChild(menuContainer);
        console.log('Menu Test!');
        

    }

};

export { loadMenuPage };