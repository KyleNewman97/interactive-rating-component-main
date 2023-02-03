const routes = {
    404: {
        html: '/html/404.html',
        title: '404 Error',
        scripts: []
    },
    '/': {
        html: '/html/rating.html',
        title: '',
        scripts: ['index.js']
    },
    '/thank-you': {
        html: '/html/thank-you.html',
        title: 'Thank You',
        scripts: ['src/thank-you.js']
    }
};

const routeTo = (href) => {
    // Add the route to the browser's history
    window.history.pushState({}, '', href);

    // Route to the next page
    routeHandler();
}

// Get the scripts section of the document
const scriptsSection = document.getElementById('scripts-section');

const routeHandler = async () => {
    let location = window.location.pathname;
    if (location.length === 0) {
        location = '/';
    }

    const nextRoute = routes[location] || routes[404];
    const html = await fetch(nextRoute.html).then((response) => response.text());
    document.getElementById('content-window').innerHTML = html;

    // Remove all previous scripts
    Array.from(scriptsSection.children).forEach(child => {
        child.remove();
    });

    // Add scripts to the document
    nextRoute.scripts.forEach(scriptPath => {
        const script = document.createElement('script');
        script.src = scriptPath;
        scriptsSection.appendChild(script);
    });
}

// Ensure that we set the content on initial load
routeTo('/');