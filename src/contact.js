var loadContactPage = {
    content: document.getElementById('content'),
    buildContactPage: function() {
        //create elements
        let contactContainer = document.createElement('div');
        let contactTitle = document.createElement('div');
        let contactPhone = document.createElement('div');
        //add class names
        contactContainer.className = "contactContainer";
        contactTitle.className = "contactTitle";
        contactPhone.className = "contactPhone";
        //add innertext to elements
        contactTitle.innerText = "Please Contact Us";
        contactPhone.innerText = "123 456 789";
        //append elements
        contactContainer.append(contactTitle,contactPhone);
        this.content.appendChild(contactContainer);
        console.log('Contact Test!');
    }
};

export { loadContactPage };