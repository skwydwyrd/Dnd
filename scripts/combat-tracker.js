function generateInitiativeTracker(){
    const div = document.getElementById('initiative')
    for (let step = 0; step < 30; step ++){
        const init_input = document.createElement('input')
        init_input.type = 'text'
        init_input.id = `init-${step}`
        init_input.placeholder = `${step}`
        init_input.classList.add('bg-gray-500 m-1.5 mt-2.5 rounded rounded-md p-1')
        div.appendChild(init_input)
    }
}
function proccessCharInfo() {
    // Get the value from the input field
    let charName = document.getElementById('character-name').value;
    let charHP = document.getElementById('character-hp').value;
    let charAC = document.getElementById('character-ac').value;
    let charSpeed = document.getElementById('character-speed').value;
    let charAbilities = document.getElementById('character-abilities').value;
    let charActions = document.getElementById('character-actions').value;
    let charStr = document.getElementById('character-str').value;
    let charDex = document.getElementById('character-dex').value;
    let charCon = document.getElementById('character-con').value;
    let charInt = document.getElementById('character-int').value;
    let charWis = document.getElementById('character-wis').value;
    let charCha = document.getElementById('character-cha').value;
    // let cardContent;
    
    if(charName == '' || charHP == '' || charAC == '' || charSpeed == '' || charActions == '' || charStr == '' || charDex == '' || charCon == '' || charInt == '' || charWis == '' || charCha == ''){
        showNotification('Missing one or more required traits', 'bg-red-500');
        return;
    }
    // save character info to localStorage
    saveCharacterToStorage({charName, charHP, charAC, charAbilities, charActions, charSpeed, charStr, charDex, charCon, charInt, charWis, charCha})

 
    // Clear the input fields
    document.getElementById('character-name').value='';
    document.getElementById('character-hp').value='';
    document.getElementById('character-ac').value='';
    document.getElementById('character-abilities').value='';
    document.getElementById('character-actions').value='';
    document.getElementById('character-speed').value='';
    document.getElementById('character-str').value='';
    document.getElementById('character-dex').value='';
    document.getElementById('character-con').value='';
    document.getElementById('character-int').value='';
    document.getElementById('character-wis').value='';
    document.getElementById('character-cha').value='';
    // Show success message
    showNotification('Character Info submitted successfully!', 'bg-green-500')
}

function saveCharacterToStorage(character){
    // Get the existing character from localStorage, or initialize an empty array if none are found
    const characters = JSON.parse(localStorage.getItem('characters')) || [];
    characters.push(character);
    // save the updated array back to localStorage
    localStorage.setItem('characters', JSON.stringify(characters));
}

function loadCharactersFromStorage(){
    // Get the saved characters from localStorage
    const characters = JSON.parse(localStorage.getItem('characters')) || [];
    const outputElement = document.getElementById('char-info-output')
    outputElement.innerHTML = '';
    // Display each character
    characters.forEach(character => {
        const cardContent = `
            <div class="bg-gray-800 p-4 m-4 rounded-lg shadow-lg">
                
                <h2 class="text-xl text-indigo-300 font-bold mb-2">Character Name: <span class="text-white">${character.charName}</span></h2>

                <hr class="text-red-300 p-2" />

                <p class="text-indigo-200">HP: <span class="text-indigo-100">${character.charHP}</span></p>
                <p class="text-indigo-200">AC: <span class="text-indigo-100">${character.charAC}</span></p>
                <p class="text-indigo-200">Speed: <span class="text-indigo-100">${character.charSpeed}</span></p>
                
                <hr class="text-red-300 p-2" />

                <p class="text-indigo-200">Strength: <span class="text-indigo-100">${character.charStr}</soan></p>
                <p class="text-indigo-200">Dexterity: <span class="text-indigo-100">${character.charDex}</span></p>
                <p class="text-indigo-200">Constitution: <span class="text-indigo-100">${character.charCon}</span></p>
                <p class="text-indigo-200">Intelligence: <span class="text-indigo-100">${character.charInt}</span></p>
                <p class="text-indigo-200">Wisdom: <span class="text-indigo-100">${character.charWIS}</span></p>
                <p class="text-indigo-200">Charisma: <span class="text-indigo-100">${character.charCHA}</span></p>
                
                <hr class="text-red-300 p-2" />

                <p class="text-indigo-200">Abilities: <span class="text-indigo-100">${character.charAbilities}</span></p>
                
                <hr class="text-red-300 p-2" />

                <p class="text-indigo-200">Actions: <span class="text-indigo-100">${character.charActions}</span></p>
            </div>
            `;
        // Display the input in the char-name-output p-tag
        outputElement.innerHTML += cardContent
        
    })
}

function showNotification(message, messageColor){
    // get the element
    const notifiaction = document.getElementById('notification');
    // set the message
    notifiaction.textContent=message
    // set the classes
    notifiaction.className=`${messageColor} text-white px-4 py-2 rounded-md mb-2`
    // remove a class
    notifiaction.classList.remove('hidden')

    // Hide the notification after 2 sections only if the user successfully fills everything in
    if(messageColor ==='bg-green-500'){
        setTimeout(() => {
            notifiaction.classList.add('hidden')
        }, 1500)
    }

}

document.addEventListener('DOMContentLoaded',()=>{
    generateInitiativeTracker()
    loadCharactersFromStorage()
})

