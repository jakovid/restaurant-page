var footer = { 
    content: document.getElementById('content'),
    buildFooter: function() {
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

export { footer };