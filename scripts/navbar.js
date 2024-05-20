document.addEventListener('DOMContentLoaded', function() {
// http://127.0.0.1:5501/Web%20Design/pages/statblock-generator.html
    
    // get current pathname = window.location.pathname
    // split by / to get each path value 
    // slice this list so we don't include the last pathname (which represents the page we're currently on)
    // join this back to a string
    // add a / at the end
    const basePath = window.location.pathname.split('/').slice(0,-1).join('/') + '/';
    // TODO: make it work so that if the screen is small, only player resources, game master resources, books and rules, and statblock show up
    const links = [
        // { name: 'Categories', href: 'categories.html'},
        { name: 'New Releases', href: 'new-releases.html'},
        { name: 'Combat Tracker', href: 'combat-tracker.html'},
        { name: 'Statblock Generator', href: 'statblock-generator.html'},
        { name: 'Encounter Calculator', href: 'encounter-generator.html' },
        { name: 'Player Resources', href: 'player-resources.html' },
        { name: 'Game Master Resources', href: 'dm-resources.html' },
        { name: 'Books and Rules', href: 'books-rules.html' }
    ]

    const navbarStyles = `items-center justify-around flex sticky top-0 z-50 bg-gray-700 bg-opacity-50 
                        filter backdrop-blur-md border-b-2 border-indigo-700 
                        shadow-md shadow-indigo-700 h-[10%]`
    const navbarHTML = `
    <div id="navbar" class="${navbarStyles}">
        <nav class="overflow-x-auto space-x-2 flex p-2 h-full w-full text-sm items-center justify-center text-center">
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
        <button class="text-2xl p-2 mr-10 w-6 h-6 items-center justify-center bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 rounded-md" id="dark-mode"></button>
    </div>`;


    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    const darkModeButton = document.getElementById('dark-mode')
    darkModeButton.addEventListener('click',()=>{
        const darkLight = document.getElementById('dark/light')
        darkLight.classList.toggle('bg-gray-950')
        darkLight.classList.toggle('text-gray-200')
    // darkLight.classList.toggle('placeholder-black')
})

});


