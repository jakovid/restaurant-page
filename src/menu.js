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
        //create steak
        let steakBox = document.createElement('div');
        let steakPic = document.createElement('img');
        let steakName = document.createElement('div');
        let steakAbout = document.createElement('div');
        //create steak
        let tiramisuBox = document.createElement('div');
        let tiramisuPic = document.createElement('img');
        let tiramisuName = document.createElement('div');
        let tiramisuAbout = document.createElement('div');
        //add src for pictues
        friesPic.src = '../img/fries.png';
        saladPic.src = '../img/salad.png';
        steakPic.src = '../img/steak.png';
        tiramisuPic.src = '../img/tiramisu.png';

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
        steakBox.className = "foodBox";
        steakPic.className = "foodPic";
        steakName.className = "foodName";
        steakAbout.className = "foodAbout";
        tiramisuBox.className = "foodBox";
        tiramisuPic.className = "foodPic";
        tiramisuName.className = "foodName";
        tiramisuAbout.className = "foodAbout";
        //add innertext to elements
        friesName.innerText = "Garlic Fries";
        friesAbout.innerText = "Fresh cut spuds"
        saladName.innerText = "Green Goddess Salad";
        saladAbout.innerText = "You've seen this one too many times on tiki toki";
        steakName.innerText = "Rosemary Steak";
        steakAbout.innerText = "Choice sirloin basted in rosemary, garlic, and butter"
        tiramisuName.innerText = "Tiramisu";
        tiramisuAbout.innerText = "It tastes just like putting a Chanel bag in your mouth";
        //append elements
        friesBox.append(friesPic,friesName,friesAbout);
        saladBox.append(saladPic,saladName,saladAbout);
        steakBox.append(steakPic,steakName,steakAbout);
        tiramisuBox.append(tiramisuPic,tiramisuName,tiramisuAbout);
        menuContainer.append(friesBox,saladBox,steakBox,tiramisuBox);
        this.content.appendChild(menuContainer);
        console.log('Menu Test!');
        

    }

};

export { loadMenuPage };