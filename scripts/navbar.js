document.addEventListener('DOMContentLoaded', function() {
// http://127.0.0.1:5501/Web%20Design/pages/statblock-generator.html

    // get current pathname = window.location.pathname
    // split by / to get each path value 
    // slice this list so we don't include the last pathname (which represents the page we're currently on)
    // join this back to a string
    // add a / at the end
    const basePath = window.location.pathname.split('/').slice(0,-1).join('/') + '/';
    console.log(basePath);

    const links = [
        { name: 'Categories', href: 'categories.html'},
        { name: 'New Releases', href: 'new-releases.html'},
        { name: 'Combat Tracker', href: 'combat-tracker.html'},
        { name: 'Statblock Generator', href: 'statblock-generator.html'},
        { name: 'Encounter Generator', href: 'encounter-generator.html' },
        { name: 'Player Resources', href: 'player-resources.html' },
        { name: 'Game Master Resources', href: 'dm-resources.html' },
        { name: 'Books and Rules', href: 'books-rules.html' }
    ]


    const navbarHTML = `
        <div id="navbar" class="sticky top-0 z-50">
            <nav class="space-x-2 flex p-2 h-full w-full text-sm bg-gray-900 border-r-2 border-indigo-800 items-center justify-center text-center">
                <a href='../index.html'>
                    <img class="object-fill w-24 h-10 rounded-md hover:bg-indigo-800 items-center justify-center" src="../images/DNDampersand.jpeg" alt="Logo/Home"/>
                </a>
                ${links.map(link => 
                    `<a 
                        class="items-center hover:bg-indigo-800 rounded-lg p-2"
                        href=${basePath}${link.href}
                    > 
                        ${link.name}
                    </a>`
                ).join('')}
                
            </nav>
        </div>`;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
