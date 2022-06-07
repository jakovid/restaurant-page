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

        //add class names to elements
        menuContainer.className = 'menuContainer';
        menuTitle.className = 'menuTitle';
        friesBox.className = "foodBox";
        friesPic.className = "foodPic";
        friesName.className = "foodName";
        friesAbout.className = "foodAbout";
        //add innertext to elements
        
        //append elements
        friesBox.append(friesPic,friesName,friesAbout);
        saladBox.append(saladPic,saladName,saladAbout);
        

    }

};

export { loadMenuPage };