const monster_names = {
    "5e SRD-------------": ["Aboleth", "Acolyte", "Adult Black Dragon", "Adult Blue Dragon", "Adult Brass Dragon", "Adult Bronze Dragon", "Adult Copper Dragon", "Adult Gold Dragon", "Adult Green Dragon", "Adult Red Dragon", "Adult Silver Dragon", "Adult White Dragon", "Air Elemental", "Ancient Black Dragon", "Ancient Blue Dragon", "Ancient Brass Dragon", "Ancient Bronze Dragon", "Ancient Copper Dragon", "Ancient Gold Dragon", "Ancient Green Dragon", "Ancient Red Dragon", "Ancient Silver Dragon", "Ancient White Dragon", "Androsphinx", "Animated Armor", "Ankheg", "Ape", "Archmage", "Assassin", "Awakened Shrub", "Awakened Tree", "Axe Beak", "Azer", "Baboon", "Badger", "Balor", "Bandit", "Bandit Captain", "Barbed Devil", "Basilisk", "Bat", "Bearded Devil", "Behir", "Berserker", "Black Bear", "Black Dragon Wyrmling", "Black Pudding", "Blink Dog", "Blood Hawk", "Blue Dragon Wyrmling", "Boar", "Bone Devil", "Brass Dragon Wyrmling", "Bronze Dragon Wyrmling", "Brown Bear", "Bugbear", "Bulette", "Camel", "Cat", "Centaur", "Chain Devil", "Chimera", "Chuul", "Clay Golem", "Cloaker", "Cloud Giant", "Cockatrice", "Commoner", "Constrictor Snake", "Copper Dragon Wyrmling", "Couatl", "Crab", "Crocodile", "Cult Fanatic", "Cultist", "Darkmantle", "Death Dog", "Deep Gnome (Svirfneblin)", "Deer", "Deva", "Dire Wolf", "Djinni", "Doppelganger", "Draft Horse", "Dragon Turtle", "Dretch", "Drider", "Drow", "Druid", "Dryad", "Duergar", "Dust Mephit", "Eagle", "Earth Elemental", "Efreeti", "Elephant", "Elk", "Erinyes", "Ettercap", "Ettin", "Fire Elemental", "Fire Giant", "Flesh Golem", "Flying Snake", "Flying Sword", "Frog", "Frost Giant", "Gargoyle", "Gelatinous Cube", "Ghast", "Ghost", "Ghoul", "Giant Ape", "Giant Badger", "Giant Bat", "Giant Boar", "Giant Centipede", "Giant Constrictor Snake", "Giant Crab", "Giant Crocodile", "Giant Eagle", "Giant Elk", "Giant Fire Beetle", "Giant Frog", "Giant Goat", "Giant Hyena", "Giant Lizard", "Giant Octopus", "Giant Owl", "Giant Poisonous Snake", "Giant Rat", "Giant Rat (Diseased)", "Giant Scorpion", "Giant Sea Horse", "Giant Shark", "Giant Spider", "Giant Toad", "Giant Vulture", "Giant Wasp", "Giant Weasel", "Giant Wolf Spider", "Gibbering Mouther", "Glabrezu", "Gladiator", "Gnoll", "Goat", "Goblin", "Gold Dragon Wyrmling", "Gorgon", "Gray Ooze", "Green Dragon Wyrmling", "Green Hag", "Grick", "Griffon", "Grimlock", "Guard", "Guardian Naga", "Gynosphinx", "Half-Red Dragon Veteran", "Harpy", "Hawk", "Hell Hound", "Hezrou", "Hill Giant", "Hippogriff", "Hobgoblin", "Homunculus", "Horned Devil", "Hunter Shark", "Hydra", "Hyena", "Ice Devil", "Ice Mephit", "Imp", "Invisible Stalker", "Iron Golem", "Jackal", "Killer Whale", "Knight", "Kobold", "Kraken", "Lamia", "Lemure", "Lich", "Lion", "Lizard", "Lizardfolk", "Mage", "Magma Mephit", "Magmin", "Mammoth", "Manticore", "Marilith", "Mastiff", "Medusa", "Merfolk", "Merrow", "Mimic", "Minotaur", "Minotaur Skeleton", "Mule", "Mummy", "Mummy Lord", "Nalfeshnee", "Night Hag", "Nightmare", "Noble", "Ochre Jelly", "Octopus", "Ogre", "Ogre Zombie", "Oni", "Orc", "Otyugh", "Owl", "Owlbear", "Panther", "Pegasus", "Phase Spider", "Pit Fiend", "Planetar", "Plesiosaurus", "Poisonous Snake", "Polar Bear", "Pony", "Priest", "Pseudodragon", "Purple Worm", "Quasit", "Quipper", "Rakshasa", "Rat", "Raven", "Red Dragon Wyrmling", "Reef Shark", "Remorhaz", "Rhinoceros", "Riding Horse", "Roc", "Roper", "Rug of Smothering", "Rust Monster", "Saber-Toothed Tiger", "Sahuagin", "Salamander", "Satyr", "Scorpion", "Scout", "Sea Hag", "Sea Horse", "Shadow", "Shambling Mound", "Shield Guardian", "Shrieker", "Silver Dragon Wyrmling", "Skeleton", "Solar", "Specter", "Spider", "Spirit Naga", "Sprite", "Spy", "Steam Mephit", "Stirge", "Stone Giant", "Stone Golem", "Storm Giant", "Succubus/Incubus", "Swarm of Bats", "Swarm of Beetles", "Swarm of Centipedes", "Swarm of Insects", "Swarm of Poisonous Snakes", "Swarm of Quippers", "Swarm of Rats", "Swarm of Ravens", "Swarm of Spiders", "Swarm of Wasps", "Tarrasque", "Thug", "Tiger", "Treant", "Tribal Warrior", "Triceratops", "Troll", "Tyrannosaurus Rex", "Unicorn", "Vampire", "Vampire Spawn", "Veteran", "Violet Fungus", "Vrock", "Vulture", "Warhorse", "Warhorse Skeleton", "Water Elemental", "Weasel", "Werebear", "Wereboar", "Wererat", "Weretiger", "Werewolf", "White Dragon Wyrmling", "Wight", "Will-o'-Wisp", "Winter Wolf", "Wolf", "Worg", "Wraith", "Wyvern", "Xorn", "Young Black Dragon", "Young Blue Dragon", "Young Brass Dragon", "Young Bronze Dragon", "Young Copper Dragon", "Young Gold Dragon", "Young Green Dragon", "Young Red Dragon", "Young Silver Dragon", "Young White Dragon", "Zombie"],
    "--------------Tome of Beasts----------": ["Aboleth, Nihilith", "Nihilethic Zombie", "Abominable Beauty", "Accursed Defiler", "Ala", "Algorith", "Alseid", "Alseid Grovekeeper", "Amphiptere", "Andrenjinyi", "Angatra", "Angel, Chained", "Fidele Angel", "Angler Worm", "Giant Ant", "Giant Ant Queen", "Anubian", "Arboreal Grappler", "Aridni", "Asanbosam", "Azza Gremlin", "Baba Yaga's Horsemen, Black Night", "Baba Yaga's Horsemen, Bright Day", "Baba Yaga's Horsemen, Red Sun", "Bagiennik", "Bastet Temple Cat", "Bearfolk", "Behtu", "Beli", "Bereginyas", "Blemmyes", "Boloti", "Bone Collective", "Bone Crab", "Bone Swarm", "Bouda", "Broodiken", "Bucca", "Bukavac", "Buraq", "Burrowling", "Cactid", "Cambium", "Carrion Beetle", "Cavelight Moss", "Chelicerae", "Chernomoi", "Child Of The Briar", "Chronalmental", "Cikavak", "Clockwork Abomination", "Clockwork Beetle", "Clockwork Beetle Swarm", "Clockwork Hound", "Clockwork Huntsman", "Clockwork Myrmidon", "Clockwork Watchman", "Weaving Spider", "Clurichaun", "Cobbleswarm", "Corpse Mound", "Dau", "Death Butterfly Swarm", "Greater Death Butterfly Swarm", "Deathwisp", "Deep One", "Deep One Hybrid Priest", "Deep One Archimandrite", "Apau Perape", "Berstuc", "Kishi Demon", "Malakbel", "Psoglav Demon", "Rubezahl", "Skin Bat", "Derro Fetal Savant", "Derro Shadow Antipaladin", "Arbeyach", "Spawn Of Arbeyach", "Ia'affrat", "Automata Devil", "Chort Devil", "Crystalline Devil", "Gilded Devil", "Ink Devil", "Koralk (Harvester Devil)", "Lunar Devil", "Orobas Devil", "Salt Devil", "Mbielu", "Ngobou", "Spinosaurus", "Young Spinosaurus", "Dipsa", "Dissimortuum", "Dogmole", "Dogmole Juggernaut", "Domovoi", "Doppelrat", "Dorreq", "Adult Cave Dragon", "Young Cave Dragon", "Cave Dragon Wyrmling", "Ancient Flame Dragon", "Adult Flame Dragon", "Young Flame Dragon", "Flame Dragon Wyrmling", "Ancient Mithral Dragon", "Adult Mithral Dragon", "Young Mithral Dragon", "Ancient Sea Dragon", "Adult Sea Dragon", "Young Sea Dragon", "Sea Dragon Wyrmling", "Ancient Void Dragon", "Adult Void Dragon", "Young Void Dragon", "Void Dragon Wyrmling", "Ancient Wind Dragon", "Adult Wind Dragon", "Young Wind Dragon", "Wyrmling Wind Dragon", "Dragon Eel", "Dragonleaf Tree", "Alehouse Drake", "Ash Drake", "Coral Drake", "Crimson Drake", "Deep Drake", "Elder Shadow Drake", "Paper Drake", "Rust Drake", "Star Drake", "Drakon", "Dream Eater", "Drowned Maiden", "Duskthorn Dryad", "Dullahan", "Dune Mimic", "Eala", "Eater Of Dust (Yakat-Shi)", "Edimmu", "Eel Hound", "Einherjar", "Eleinomae", "Elemental Locus", "Shadow Fey", "Shadow Fey Duelist", "Shadow Fey Enchantress", "Shadow Fey Forest Hunter", "Shadow Fey Guardian", "Emerald Eye", "Empty Cloak", "Eonic Drifter", "Erina Scrounger", "Erina Defender", "Far Darrig", "Fate Eater", "Fear Smith", "Fellforged", "Fext", "Feyward Tree", "Firebird", "Firegeist", "Flutterflesh", "Folk Of Leng", "Forest Marauder", "Fraughashar", "Frostveil", "Garroter Crab", "Gbahali (Postosuchus)", "Gearforged Templar", "Al-Aeshma Genie", "Gerridae", "Beggar Ghoul", "Bonepowder Ghoul", "Ghoul, Darakhul", "Ghoul, Imperial", "Ghoul, Iron", "Desert Giant", "Flab Giant", "Hraesvelgr The Corpse Swallower", "Jotun Giant", "Thursir Giant", "Glass Gator", "Gnarljak", "Gnoll Havoc Runner", "Goat-Man", "Dust Goblin", "Eye Golem", "Hoard Golem", "Salt Golem", "Smaragdine Golem", "Steam Golem", "Gray Thirster", "Rum Gremlin", "Grim Jester", "Gug", "Blood Hag", "Mirror Hag", "Red Hag", "Sand Hag", "Owl Harpy", "Haugbui", "Herald Of Blood", "Herald Of Darkness", "Horakh", "Hound Of The Night", "Hulking Whelp", "Hundun", "Ice Maiden", "Idolic Deity", "Imy-Ut Ushabti", "Isonade", "Jaculus", "Kalke", "Kikimora", "Kobold Alchemist", "Kobold Chieftain", "Kobold Trapsmith", "Kongamato", "Koschei", "Kot Bayun", "Krake Spawn", "Lantern Dragonette", "Lemurfolk", "Lemurfolk Greyfur", "Leshy", "Library Automaton", "Lich Hound", "Likho", "Lindwurm", "Liosalfar", "Living Wick", "Lorelei", "Loxoda", "Mahoru", "Mallqui", "Malphas (Storm Crow)", "Mamura", "Mask Wight", "Mavka", "Mi-Go", "Millitaur", "Map Mimic", "Mindrot Thrall", "Mirager", "Miremal", "Mngwa", "Monolith Champion", "Monolith Footman", "Mordant Snare", "Morphoi", "Moss Lurker", "Venomous Mummy", "Deathcap Myconid", "Myling", "Naina", "Nichny", "Nightgarm", "Nkosi", "Nkosi Pridelord", "Nkosi War Ostrich", "Noctiny", "Oculo Swarm", "Oozasis", "Corrupting Ooze", "Ostinato", "Pombero", "Possessed Pillar", "Putrid Haunt", "Qwyllion", "Ramag", "Rat King", "Ratatosk", "Ratfolk", "Ratfolk Rogue", "Ravenala", "Ravenfolk Scout", "Ravenfolk Warrior", "Ravenfolk Doom Croaker", "Redcap", "Rift Swine", "Adult Rime Worm", "Rime Worm Grub", "Risen Reaver", "Roachling Skirmisher", "Roachling Lord", "Rotting Wind", "Rusalka", "Sand Silhouette", "Sandman", "Sandwyrm", "Sap Demon", "Sarcophagus Slime", "Sathaq Worm", "Savager", "Scheznyki", "Night Scorpion", "Stygian Fat-Tailed Scorpion", "Selang", "Serpopard", "Shabti", "Shadhavar", "Shadow Beast", "Shellycoat", "Shoggoth", "Shroud", "Skein Witch", "Sharkjaw Skeleton", "Vine Troll Skeleton", "Skitterhaunt", "Slow Storm", "Swamp Adder", "Zanskaran Viper", "Son Of Fenris", "Soul Eater", "Spark", "Spectral Guardian", "Gypsosphinx", "Ghostwalk Spider", "J'ba Fofi Spider", "Red-Banded Line Spider", "Sand Spider", "Spider Of Leng", "Spider Thief", "Spire Walker", "Star Spawn Of Cthulhu", "Stryx", "Stuhac", "Subek", "Suturefly", "Fire Dancer Swarm", "Manabane Scarab Swarm", "Prismatic Beetle Swarm", "Sluagh Swarm", "Wolf Spirit Swarm", "Temple Dog", "Thuellai", "Ancient Titan", "Degenerate Titan", "Titanoboa", "Tophet", "Tosculi Hive-Queen", "Tosculi Warrior", "Tosculi Drone", "Tosculi Elite Bow Raider", "Treacle", "Weeping Treant", "Lake Troll", "Trollkin Reaver", "Tusked Skyfish", "Uraeus", "Urochar (Strangling Watcher)", "Ushabti", "Vaettir", "Valkyrie", "Umbral Vampire", "Vapor Lynx", "Vesiculosa", "Vila", "Vile Barber", "Vine Lord", "Vine Lord's Tendril Puppet", "Voidling", "Wampus Cat", "Water Leaper", "Wharfling", "Wharfling Swarm", "White Ape", "Witchlight", "Wormhearted Suffragan", "Xanka", "Xhkarsh", "Ychen Bannog", "Zaratan", "Zimwi", "Zmey", "Zmey Headling", "Bandit Lord", "Black Knight Commander", "City Watch Captain", "Devilbound Gnomish Prince", "Dwarven Ringmage", "Elvish Veteran Archer", "Ghost Knight", "Ogre Chieftain, Corrupted", "Scorpion Cultist", "Wolf Reaver Dwarf", "Emerald Order Cult Leader", "Vampire Warlock - Variant"],
};
let selectedMonster = ''
const statblock_data = {}
const plusButtonSpeed = document.getElementById('add-speed')
document.addEventListener('DOMContentLoaded',()=>{
    const base_url = 'https://www.dnd5eapi.co/api/'

    const input1 = document.getElementById('search-input');
    const input2 = document.getElementById('input2');
    const submit = document.getElementById('submit-button');
    const info_container = document.getElementById('output');
    const infoToggleButton = document.getElementById('info-toggler');
    const monsterContainer = document.getElementById('monster-preset-container');
    

    // edit monster form variables
    // const monster_form_inputs = document.getElementsById('form-input')
    // const monster_form_selects = document.getElementsById('form-select')
    // const monster_form_textareas = document.getElementsById('form-textarea')
    const monster_form = document.getElementById('editor-form')
    console.log(monster_form)

    const select = document.createElement('select');
    select.className = 'mb-4 bg-gray-600 bg-opacity-50 border border-gray-600 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300 ';

    // Placeholder option
    const firstOption = document.createElement('option');
    firstOption.value = '';
    firstOption.textContent = 'Select a monster';
    firstOption.disabled = true;
    firstOption.selected = true;
    firstOption.hidden = true;
    select.appendChild(firstOption);

    
    submit.addEventListener('click', async ()=>{
        try {
            displayData()
        }
    
        catch (error) {
            showNotification(`Error with button: ${error}`,'bg-red-500')
        }
    })
    
    async function getData() {
        try {
            const endpoint = `${base_url}monsters/${selectedMonster}`
            console.log(endpoint)
            const response = await fetch(endpoint
                .replaceAll(' ','-')
                .toLowerCase())
            const data = await response.json()
    
            return data
        }
        catch(error) {
            showNotification(`Error getting data: ${error}`,'bg-red-500')
        }
    }
    async function displayData() {
        try {
            const data = await getData();
            info_container.classList.remove('hidden')
            info_container.innerHTML = '';
            setEditor(data, monster_form)
            const infoDiv = createInfoDiv(data);
            info_container.appendChild(infoDiv);
        } catch (error) {
            showNotification(`Error displaying data: ${error}`,'bg-red-500')
        }
    }
    
    function createInfoDiv(data) {
        const div = document.createElement('div');
        div.className = 'p-4 bg-opacity-20 bg-black rounded-lg shadow-lg backdrop-blur-sm backdrop-filter';
        div.innerHTML = `
            <div class="rounded text-white">${formatBasicInfoMON(data)}</div>
            <div class="rounded text-white">${formatSpeed(data)}</div>
            <div class="rounded text-white">${formatAbilities(data)}</div>
            <div class="rounded text-white">${formatAttributes(data, 'Saving Throw')}</div>
            <div class="rounded text-white">${formatAttributes(data, 'Skill')}</div>
            <div class="rounded text-white">${formatMoreAttributes(data)}</div>
            <div class="rounded text-white">${formatSpecialAbilities(data)}</div>
            <div class="rounded text-white">${formatActions(data)}</div>
            <div class="rounded text-white">${formatLegnedaryActions(data)}</div>
        `;
        return div;
    }
    function setEditor(data, monster_form){
        console.log(data['type'].charAt(0).toUpperCase() + data['type'].slice(1))

        document.getElementById('name').value = data['name']
        document.getElementById('size').value = data['size']
        document.getElementById('type').value = data['type'].charAt(0).toUpperCase() + data['type'].slice(1)
        document.getElementById('subtype').value = data['subtype'] || 'None'
        // TODO: Add alignment
        document.getElementById('armor_class').value = data['armor_class'][0]['value']
        document.getElementById('armor_class_type').value = data['armor_class'][0]['type'] !== 'dex' ? data['armor_class'][0]['type'] : ''
        document.getElementById('hit_dice').value = data['hit_dice']
        // TODO: Add speed
        document.getElementById('strength').value = data['strength']
        document.getElementById('dexterity').value = data['dexterity']
        document.getElementById('constitution').value = data['constitution']
        document.getElementById('intelligence').value = data['intelligence']
        document.getElementById('wisdom').value = data['wisdom']
        document.getElementById('charisma').value = data['charisma']
        // TODO: add skills and saves
        document.getElementById('challenge_rating').value = data['challenge_rating']
        // data['special_abilities'].forEach( ability =>{
        //     document.getElementById9('abilities').value += ability
        // })
    }


    infoToggleButton.addEventListener('click',()=>{
        const info = document.getElementById('info');
        info.classList.toggle('hidden')
    })
    function formatBasicInfoMON(data) {
        //dnd info
        // hp format: (num of dice)d(die size) + (modifier)
        return `<div class="text-lg font-semibold text-white space-y-2">
                    <p class="font-bold">${data['name']}</p>
                    <p class="text-italic"> ${data['size']} ${data['type']}, ${data['alignment']}</p>
                    <p class="font-bold"> Armor Class: ${data['armor_class'][0]['value']} (${data['armor_class'][0]['type']})</p>
                    <div class="flex text-md items-center">
                        <p class="font-bold"> Hit Points: ${data['hit_points']}</p>
                        <button class="bg-blue-700 rounded p-1 ml-2" onclick="roll('Hit Points','${data['hit_points_roll']}')">${data['hit_points_roll']}</button>

                    </div>
                </div>`;
    }
    
    
    function formatSpeed(data) {
        
        let speedText = '';
        Object.entries(data['speed']).forEach(([type, speed]) => {
            speedText += speedText ? `, ${type} ${speed}` : ` ${speed}`;
        });
        return `<strong class="text-lg"> Speed: </strong>` + speedText + '<br>';
    }
    
    function formatAbilities(data) {
        
        const abilities = [
            {key: 'STR', value : data['strength']},
            {key: 'DEX', value : data['dexterity']},
            {key: 'CON', value : data['constitution']},
            {key: 'INT', value : data['intelligence']},
            {key: 'WIS', value : data['wisdom']},
            {key: 'CHA', value : data['charisma']}
        ]
        const abilityHTML = abilities.map(ability => {
            const mod = Math.floor((ability.value - 10)/2);
            return `<div class="attribute">
                <div class="font-bold mb-1">${ability.key} </div>
                <div>${ability.value}</div> 
                ${createRollButton(`${ability.key} Check`, `1d20+${mod}`,mod > 0 ? `+ ${mod}`: `${mod}`)}
            </div>`
        }).join('')
        
        return `<hr><div class="z-50 flex justify-around text-center text-white text-lg font-semibold my-2">${abilityHTML}</div><hr>`;


    }
    
    
    
    
    function formatAttributes(data, type) {
        
        const proficiencies = data['proficiencies']
            .filter(prof => prof['proficiency']['name'].startsWith(type))
            .map(prof => `${prof['proficiency']['name'].split(': ')[1]} +${prof['value']}`)
            ;
            
        console.log(proficiencies)
        let htmlContent = `<div class="flex items-center">${type}s:`
        if (proficiencies.length > 0){
            proficiencies.forEach((proficiency)=>{
                const mod = proficiency.split(' ')
                htmlContent += `<p>${proficiency.split(' ')[0]}</p>
                <button class="bg-blue-700 rounded p-1 m-2" onclick="roll('${type =='Skill' ? mod[0]+' '+'Check' : mod[0]+' '+type}', '1d20${mod[1]}')">
                ${mod[1]}
                </button>`
            })
        }
        return htmlContent + '</div>'
        
    }
    function formatMoreAttributes(data) {
        let htmlContent = '<div>';
    
        if (data['damage_vulnerabilities'].length > 0) {
            const dmg_vuls = data['damage_vulnerabilities'].join(', ');
            htmlContent += `<strong>Damage Vulnerabilities:</strong> ${dmg_vuls}<br>`;
        }
    
        if (data['damage_resistances'].length > 0) {
            const dmg_reses = data['damage_resistances'].join(', ');
            htmlContent += `<strong>Damage Resistances:</strong> ${dmg_reses}<br>`;
        }
    
        if (data['damage_immunities'].length > 0) {
            const dmg_immuns = data['damage_immunities'].join(', ');
            htmlContent += `<strong>Damage Immunities:</strong> ${dmg_immuns}<br>`;
        }
    
        if (data['condition_immunities'].length > 0) {
            const con_immuns = data['condition_immunities'].map(immunity => immunity.name).join(', ');
            htmlContent += `<strong>Condition Immunities:</strong> ${con_immuns}<br>`;
        }

        htmlContent += `<strong>Senses: </strong>`

        if (data['senses']['darkvision']) {
            const dv = data['senses']['darkvision'];
            htmlContent += `darkvision: ${dv}, `
        }
        if (data['senses']['blindsight']) {
            const bs = data['senses']['blindsight'];
            htmlContent += `blindsight: ${bs}, `
        }
        if (data['senses']['truesight']) {
            const ts = data['senses']['truesight'];
            htmlContent += `truesight: ${ts}, `
        }
        if (data['senses']['tremonsense']) {
            const tse = data['senses']['tremorsense'];
            htmlContent += `tremorsense: ${tse}, `
        }
        const pp = data['senses']['passive_perception'];
        htmlContent += `passive perception: ${pp} <br>`
        htmlContent +=`<strong>Languages: </strong>${data['languages']}`
        htmlContent +=`<br><strong>Challenge Rating: </strong>${data['challenge_rating']} (${data['xp']} xp)<br>`
        htmlContent += '</div>';
        
        return htmlContent;
    }


    Object.entries(monster_names).forEach(([category, monsters], index, array) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category; // Set the category name
        
        monsters.forEach(monster => {
            const option = document.createElement('option');
            option.value = monster;
            option.textContent = monster;
            optgroup.appendChild(option); // Add option to the optgroup
        });

        select.appendChild(optgroup); // Add optgroup to the select
        
    });

    // event listener to select and listen for a change event 
    select.addEventListener('change',(event)=>{
        selectedMonster = event.target.value;
       
    })
    

    monsterContainer.appendChild(select);
})
function addSpeed(){
    const container = document.getElementById('additional-speeds')
    const speed_group = document.createElement('div')
    speed_group.classList.add('flex','space-x-3')
    const speed_type = document.createElement('select')
    speed_type.classList = "bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    speed_type.innerHTML = `<optgroup label="Speed Type">
        <option value="Walking">Walking</option>
        <option value="Wwimming">Swimming</option>
        <option value="Flying">Flying</option>
        <option value="Climbing">Climbing</option>
        <option value="Burrowing">Burrowing</option>
    </optgroup>`
    const speed_number = document.createElement('input')
    speed_number.type = 'number'
    speed_number.placeholder = 'Speed'
    speed_number.classList = "bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"

    speed_group.appendChild(speed_type)
    speed_group.appendChild(speed_number)
    container.appendChild(speed_group)

       
}


    function formatSpecialAbilities(data){
        let htmlContent = '<hr><br><div>'
        for (let step = 0; step < data['special_abilities'].length; step++) {
            htmlContent += `<strong>${data['special_abilities'][step]['name']}</strong> ${data['special_abilities'][step]['desc']}<br><br>`
        }
        htmlContent +='</div>'

        return htmlContent
    }


    
    
    function formatActions2(data){
        const atk_bonus_acts = data['actions'].filter((action) => 'attack_bonus' in action)
        const dmg_acts = data['actions'].filter((action) => 'damage' in action)
        let action_i = 0;
        let htmlContent = '<div><br><strong>Actions: </strong><hr>'+
                            '<div class="flex">'+
                                '<div class="grid grid-cols-5 gap-3">';
                                    for (let step = 0; step < data['actions'].length; step++) {
                                        let action = data['actions'][step]
                                        htmlContent += `<div class="col-span-4"><strong>${data['actions'][step]['name']}</strong> ${data['actions'][step]['desc']}<br><br></div><div class="col-span-1">`;
                                        if (action['attack_bonus']){
                                            htmlContent += createRollButton('Attack Roll', `1d20+${action['attack_bonus']}`,'Roll to Hit');
                                        }
                                        if (action['damage']){
                                            action['damage'].forEach((damage) =>{
                                                const damage_type = action['damage'][damage]['damage_type']['name']
                                                htmlContent += createRollButton(`Damage Roll (${damage_type})`,`${action['damage'][damage]['damage_dice']}`,'Roll for Damage');
                                            })
                                        }
                                        htmlContent +='</div>'


                                       
                                    };
                            htmlContent +='</div></div></div>';
        return htmlContent
    }


        
    
    function formatLegnedaryActions(data){
        let htmlContent = '<div>'
        if (data['legendary_actions'].length>0){
            htmlContent += '<br><strong>Lengendary Actions: </strong><hr>'
            
            for (let step = 0; step < data['legendary_actions'].length; step++) {
                htmlContent += `<strong>${data['legendary_actions'][step]['name']}</strong> ${data['legendary_actions'][step]['desc']}<br>`
                
            }
        }
        htmlContent +='</div>'

        return htmlContent
    }

    function formatBasicInfoSPL(data){
        let htmlContent = '<div>'
        htmlContent += `<strong>${data['name']}</strong><hr>
            <p class="italic">level ${data['level']} ${data['school']}</p><br>
            <p>Casting Time: ${data['casting-time']}</p><br>
            <p>Range: ${data['range']}</p><br>
            <p>Components: ${data['']}`
            // TODO:Finish

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
        console.log('notified')
    }

    function formatActions(data){
        let htmlContent = `<div>
            <br><strong>Actions: </strong>
            <hr class="my-2">
            <div class="flex flex-wrap -mx-3">`

            data['actions'].forEach((action, index) => {
                htmlContent += `
                <div class="w-full md:w-3/4 px-3 mb-6 ">
                    <strong>${action['name']} </strong>: ${action['desc']}
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 flex flex-col space-y-2">`

                if('attack_bonus' in action) {
                    const button_classes = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    htmlContent += createRollButton(`${action['name']} Attack Roll`, `1d20+${action['attack_bonus']}`, 'Roll to Hit');
                }
                if('damage' in action && action['damage']){
                    const button_classes = `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`
                    const damage_type = action['damage'][0]['damage_type']['name']
                    const damagesJson = JSON.stringify(action['damage'])
                    htmlContent += createRollButton(`Damage Roll (${damage_type})`, `${action['damage'][0]['damage_dice']}`, 'Roll for Damage', damagesJson);

                }
                htmlContent += `</div>`
            })
            htmlContent += `</div></div>`
            return htmlContent
    }


    function roll(roll_type, dice_formula, damagesJson = '[]'){
        try {
            const decodedJson = decodeURIComponent(damagesJson); 

           
            const damages = JSON.parse(decodedJson);
            
            const displayElement = document.getElementById('roll-result-display');
            displayElement.classList.remove('hidden');
    
            if (damages.length > 0){
                let resultsHTML = `<div class="flex items-center"><strong>Damage Roll:</strong>`;
                let emojiTOdamage = {
                    'piercing' : '🗡',
                    'acid' : '🦠'
                }
                damages.forEach((damage, index) => {
                    let roll_result = rollDice(damage['damage_dice']);
                    let sep = damages.length > 1 && index < damages.length-1 ? '<span class="mx-">and</span>' : ''                    
                    resultsHTML += `
                        <div class="items-center space-x-2 py-2">
                            <p class="font-semibold ml-1"> ${roll_result} points of ${damage['damage_type']['index']} damage ${sep}</p>
                        </div>`
                });
                
                displayElement.innerHTML = resultsHTML + '</div>'
            }
            else{
            const roll_result = rollDice(dice_formula)
            displayElement.innerHTML = `<strong>${roll_type} | </strong> ${roll_result}`
            }

        } catch (error) {
            console.error("Error parsing JSON: ", error)
        }
    }

    function createRollButton(roll_type, dice_formula, message, damagesJSON='[]'){
        const encodedDamages = encodeURIComponent(damagesJSON);
        return `<button class="bg-blue-700 rounded p-1 ml-2" 
                    onclick="roll('${roll_type}','${dice_formula}','${encodedDamages}')">
                    ${message}
                </button>`
    }
    
    
    function rollDice(dice_formula){

        const parts = dice_formula.split('+')
        const diceParts = parts[0].split('d')

        const numOfDice = parseInt(diceParts[0], 10)
        const diceSides = parseInt(diceParts[1], 10)
        
        const modifier = parts.length > 1 ? parseInt(parts[1], 10) : 0

        let sum = 0

        for (let die = 0; die < numOfDice; die ++){
            sum += Math.round(Math.random() * (diceSides-1) + 1)
        }
        return sum + modifier
        

    }

    // Sparkle icon: <span class="text-yellow-400">&#10024;</span>
    // Cross: <span class="text-gray-500">&#x2020;</span>
    // Vertical bar rounded: <span class="text-gray-500">&#x2758;</span>
    function editStatblock(){
        data = getEditorData()
    }
    function getEditorData(){
        data={
            'Name':'',
            'Size':'',
            // TODO: ...
        }

    }