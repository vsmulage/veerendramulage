// Dynamic navigation function
function navigate(section) {
    const content = document.getElementById('content');
    
    switch(section) {
        case 'home':
            content.innerHTML = `
                <h1>Welcome to Our SPA</h1>
                <p>This is a simple Single Page Application designed for testing purposes. Navigate through the sections to explore.</p>
                <img src="images/image1.jpg" alt="Sample Image 1">
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>About Us</h1>
                <p>We are a company that values simplicity and elegance in design. Our goal is to provide easy-to-use applications for our users.</p>
                <img src="images/image2.jpg" alt="Sample Image 2">
            `;
            break;
        case 'gallery':
            content.innerHTML = `
                <h1>Gallery</h1>
                <p>Here are some examples of our work:</p>
                <img src="images/image3.jpg" alt="Sample Image 3">
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>Contact Us</h1>
                <p>Have any questions? Feel free to reach out at: <strong>contact@spaapp.com</strong></p>
            `;
            break;
        default:
            content.innerHTML = `<h1>Welcome to Our SPA</h1><p>Use the navigation to explore the sections.</p>`;
    }
}

// Set default content
navigate('home');