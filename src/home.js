var loadHomePage = {
    content: document.getElementById('content'),
    buildHomePage: function(){
        //create elements
        let bodyContainer = document.createElement('div');
        let bodyTitle = document.createElement('div');
        let bodyTagline = document.createElement('div');
        let bodyImage = document.createElement('img');
        let bodyCallToAction = document.createElement('div');
        //add src to image
        // bodyImage.src = '../img/chef.png';
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
};

export { loadHomePage };