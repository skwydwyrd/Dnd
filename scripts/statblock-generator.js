import { myFormHTML } from './formHtml.js'; 
import { monster_names } from './monster-names.js'
/*
import { 
    createInfoDiv, 
    showNotification
} 
from './utils.js';
*/



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

   


    
    function setEditor(data, monster_form){
        // const editorHTML = monster_form
        // editorHTML = resetEditor()
        // TODO: subtract extra selects/inputs/textareas
        // console.log(data['type'].charAt(0).toUpperCase() + data['type'].slice(1))
        document.getElementById('ability-name').value = ''
        document.getElementById('ability-desc').value = ''
        document.getElementById('action-name').value = ''
        document.getElementById('action-desc').value = ''
        document.getElementById('legendary-action-name').value = ''
        document.getElementById('legendary-action-desc').value = ''

        document.getElementById('name').value = data['name']
        document.getElementById('size').value = data['size']
        document.getElementById('type').value = data['type'].charAt(0).toUpperCase() + data['type'].slice(1)
        document.getElementById('subtype').value = data['subtype'] || ''
        if (data['alignment'] !== 'any alignment' && data['alignment'] !== 'unaligned'){
            document.getElementById('alignment1').value = data['alignment'].split(' ')[0]
            document.getElementById('alignment2').value = data['alignment'].split(' ')[1]
        }
        document.getElementById('armor_class').value = data['armor_class'][0]['value']
        document.getElementById('armor_class_type').value = data['armor_class'][0]['type'] !== 'dex' ? data['armor_class'][0]['type'] : ''
        document.getElementById('hit_dice').value = data['hit_dice']
        document.getElementById('speed-type').value = 'walk'
        document.getElementById('speed-number').value = data['speed']['walk'].split(' ft')[0]
        Object.entries(data['speed']).slice(1).forEach(([type, speed]) => {
            addSpeed(type, speed.split(' ft.')[0])
        })
        document.getElementById('strength').value = data['strength']
        document.getElementById('dexterity').value = data['dexterity']
        document.getElementById('constitution').value = data['constitution']
        document.getElementById('intelligence').value = data['intelligence']
        document.getElementById('wisdom').value = data['wisdom']
        document.getElementById('charisma').value = data['charisma']

        const saveProficiencies = data['proficiencies']
            .filter(prof => prof['proficiency']['name'].startsWith('Saving Throw: '))
            .map(prof => `${prof['proficiency']['name'].split(': ')[1]} +${prof['value']}`)
            ;
        
        if (saveProficiencies.length > 0){
            document.getElementById('saves').value = saveProficiencies[0].split(' +')[0]
        }
        
        if (saveProficiencies.length > 1){
            saveProficiencies.slice(1).forEach((proficiency) => {
                addProf('save', proficiency.split(' +')[0])
            })
        }

        const skillProficiencies = data['proficiencies']
            .filter(prof => prof['proficiency']['name'].startsWith('Skill: '))
            .map(prof => `${prof['proficiency']['name'].split(': ')[1]} +${prof['value']}`)
            ;
        
        if (skillProficiencies.length > 0){
            console.log(skillProficiencies)
            document.getElementById('skills').value = skillProficiencies[0].split(' +')[0]
        }
        
        if (skillProficiencies.length > 1){
            console.log(skillProficiencies)
            skillProficiencies.slice(1).forEach((proficiency) => {
                addProf('skill', proficiency.split(' +')[0])
            })
        }

        document.getElementById('sense-number').value = data['senses']['passive_perception']
            Object.entries(data['senses']).slice(0,-1).forEach(sense => {
                console.log(sense)
                console.log(sense[1].split(' ft.')[0])
                addSense(sense[0], sense[1].split(' ft.')[0])
            })

        const languages_list = data['languages'].split(',')
        if (languages_list.length > 0){
            if (languages_list  === 'Deep Speech'){
                languages_list[0] = 'Deep-speech'
            }
            document.getElementById('languages').value = languages_list[0]
        }
        if (languages_list.length > 1){
            languages_list.slice(1).forEach(language => {
                addLanguage(language)
            })
        }

        document.getElementById('challenge_rating').value = data['challenge_rating']

        if (data['special_abilities'].length > 0){
            document.getElementById('ability-name').value = data['special_abilities'][0]['name']
            document.getElementById('ability-desc').value = data['special_abilities'][0]['desc']
        }
        if (data['special_abilities'].length > 1){
            data['special_abilities'].slice(1).forEach( ability => {
                addTextAbility('ability', ability['name'], ability['desc'])
            })
        }

        if (data['actions'].length > 0){
            document.getElementById('action-name').value = data['actions'][0]['name']
            document.getElementById('action-desc').value = data['actions'][0]['desc']
        }
        if (data['actions'].length > 1){
            data['actions'].slice(1).forEach(action => {
                addTextAbility('action', action['name'], action['desc'])
            })
        }

        if (data['legendary_actions'].length > 0){
            document.getElementById('legendary-action-name').value = data['legendary_actions'][0]['name']
            document.getElementById('legendary-action-desc').value = data['legendary_actions'][0]['desc']
        }
        if (data['legendary_actions'].length > 1){
            data['legendary_actions'].slice(1).forEach(action => {
                addTextAbility('legendary', action['name'], action['desc'])
            })
        }

    }



    function resetEditor(){
        const formHTML = document.getElementById('editor-form').innerHTML
        formHTML = myFormHTML
        
        // TODO: FIXME: UPDATE AS HTML IS CHANGED. do not copy the form itself, just the innerHTML.
        return formHTML
    }

    infoToggleButton.addEventListener('click',()=>{
        const info = document.getElementById('info');
        info.classList.toggle('hidden')
    })

    const language_select = document.getElementById('languages')
    language_select.addEventListener('change', ()=>{
        if (language_select.value === 'Other'){
            const input = document.createElement('input')
            input.classList = "mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300";
            input.placeholder = 'Type other language';

            document.getElementById('additional-languages').appendChild(input)
        }
    })



  
    // function formatAbilities(data) {
        
    //     const abilities = [
    //         {key: 'STR', value : data['strength']},
    //         {key: 'DEX', value : data['dexterity']},
    //         {key: 'CON', value : data['constitution']},
    //         {key: 'INT', value : data['intelligence']},
    //         {key: 'WIS', value : data['wisdom']},
    //         {key: 'CHA', value : data['charisma']}
    //     ]
    //     const abilityHTML = abilities.map(ability => {
    //         const mod = Math.floor((ability.value - 10)/2);
    //         return `<div class="attribute">
    //             <div class="font-bold mb-1">${ability.key} </div>
    //             <div>${ability.value}</div> 
    //             ${createRollButton(`${ability.key} Check`, `1d20+${mod}`,mod > 0 ? `+ ${mod}`: `${mod}`)}
    //         </div>`
    //     }).join('')
        
    //     return `<hr><div class="z-50 flex justify-around text-center text-white text-lg font-semibold my-2">${abilityHTML}</div><hr>`;


    // }
    
    // function formatAttributes(data, type) {
        
    //     const proficiencies = data['proficiencies']
    //         .filter(prof => prof['proficiency']['name'].startsWith(type))
    //         .map(prof => `${prof['proficiency']['name'].split(': ')[1]} +${prof['value']}`)
    //         ;
            
    //     console.log(proficiencies)
    //     let htmlContent = ''
    //     if (proficiencies.length > 0){
    //         htmlContent = `<div class="flex items-center">${type}s:` // TODO: change so that there is a space at the end of this line
    //     }


    //     if (proficiencies.length > 0){
    //         proficiencies.forEach((proficiency)=>{
    //             const mod = proficiency.split(' ')
    //             htmlContent += `<p>${mod[0]}  </p>
    //             <button class="bg-blue-700 rounded p-1 m-2" onclick="roll('${type =='Skill' ? mod[0]+' '+'Check'+' ' : mod[0]+' '+type+' '}', '1d20${mod[1]}')">
    //             ${mod[1]}
    //             </button>`
    //         })
    //     }
    //     return htmlContent + '</div>'
        
    // }

    // function formatMoreAttributes(data) {
    //     let htmlContent = '<div>';
    
    //     if (data['damage_vulnerabilities'].length > 0) {
    //         const dmg_vuls = data['damage_vulnerabilities'].join(', ');
    //         htmlContent += `<strong>Damage Vulnerabilities:</strong> ${dmg_vuls}<br>`;
    //     }
    
    //     if (data['damage_resistances'].length > 0) {
    //         const dmg_reses = data['damage_resistances'].join(', ');
    //         htmlContent += `<strong>Damage Resistances:</strong> ${dmg_reses}<br>`;
    //     }
    
    //     if (data['damage_immunities'].length > 0) {
    //         const dmg_immuns = data['damage_immunities'].join(', ');
    //         htmlContent += `<strong>Damage Immunities:</strong> ${dmg_immuns}<br>`;
    //     }
    
    //     if (data['condition_immunities'].length > 0) {
    //         const con_immuns = data['condition_immunities'].map(immunity => immunity.name).join(', ');
    //         htmlContent += `<strong>Condition Immunities:</strong> ${con_immuns}<br>`;
    //     }

    //     htmlContent += `<strong>Senses: </strong>`

    //     if (data['senses']['darkvision']) {
    //         const dv = data['senses']['darkvision'];
    //         htmlContent += `darkvision: ${dv}, `
    //     }
    //     if (data['senses']['blindsight']) {
    //         const bs = data['senses']['blindsight'];
    //         htmlContent += `blindsight: ${bs}, `
    //     }
    //     if (data['senses']['truesight']) {
    //         const ts = data['senses']['truesight'];
    //         htmlContent += `truesight: ${ts}, `
    //     }
    //     if (data['senses']['tremonsense']) {
    //         const tse = data['senses']['tremorsense'];
    //         htmlContent += `tremorsense: ${tse}, `
    //     }
    //     const pp = data['senses']['passive_perception'];
    //     htmlContent += `passive perception: ${pp} <br>`
    //     htmlContent +=`<strong>Languages: </strong>${data['languages']}`
    //     htmlContent +=`<br><strong>Challenge Rating: </strong>${data['challenge_rating']} (${data['xp']} xp)<br>`
    //     htmlContent += '</div>';
        
    //     return htmlContent;
    // }

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

// END OF DOM CONTENT LOADED

// submitEditButton.addEventListener('click',submitEdit())

plusButtonSpeed.addEventListener('click', () => {
   addSpeed()
})
function addSpeed(type='walk', speed=30){
    console.log(document.getElementById('basicInfo'))
    const container = document.getElementById('additional-speeds')
    container.classList.remove('hidden')
    const speed_group = document.createElement('div')
    speed_group.classList.add('mb-4')
    speed_group.classList.add('flex','space-x-3')
    const speed_type = document.createElement('select')
    speed_type.classList = "bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    speed_type.innerHTML = `<optgroup label="Speed Type">
        <option value="walk">Walking</option>
        <option value="swim">Swimming</option>
        <option value="fly">Flying</option>
        <option value="climb">Climbing</option>
        <option value="burrow">Burrowing</option>
    </optgroup>`
    speed_type.value = type
    const speed_number = document.createElement('input')
    speed_number.type = 'number'
    speed_number.placeholder = 'Speed'
    speed_number.classList = "bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    speed_number.value = speed

    speed_group.appendChild(speed_type)
    speed_group.appendChild(speed_number)
    container.appendChild(speed_group)

       
}

const plusButtonSave = document.getElementById('add-save')
plusButtonSave.addEventListener('click', () =>{
    addProf('save')
})

function addProf(type, profParameter = null){
    const prof = profParameter ? profParameter : 'false'
    const container = document.getElementById(`additional-${type}s`)
    container.classList.remove('hidden')
    // container.classList.add('flex','space-x-3')
    const prof_select = document.createElement('select')
    prof_select.classList = "mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    if (type === 'skill'){
        prof_select.innerHTML = `<optgroup label="Skill Proficiencies">
                <option value="Athletics">Athletics</option>
                <option value="Acrobatics">Acrobatics</option>
                <option value="Sleight-of-hand">Sleight of Hand</option>
                <option value="Stealth">Stealth</option>
                <option value="Arcana">Arcana</option>
                <option value="History">History</option>
                <option value="Investigation">Investigation</option>
                <option value="Nature">Nature</option>
                <option value="Religion">Religion</option>
                <option value="Animal-handling">Animal Handling</option>
                <option value="Insight">Insight</option>
                <option value="Medicine">Medicine</option>
                <option value="Perception">Perception</option>
                <option value="Survival">Survival</option>
                <option value="Deception">Deception</option>
                <option value="Intimidation">Intimidation</option>
                <option value="Performance">Performance</option>
                <option value="Persuasion">Persuasion</option>
                <option value="Other">Other</option>
            </optgroup>`
    }
    else {
        prof_select.innerHTML = `<optgroup label="Saving Throw Proficiencies">
                <option value="STR">Strength</option>
                <option value="DEX">Dexterity</option>
                <option value="CON">Constitution</option>
                <option value="INT">Intelligence</option>
                <option value="WIS">Wisdom</option>
                <option value="CHA">Charisma</option>
                <option value="Other">Other</option>
            </optgroup>`
    }
    if (prof !== 'false'){
        prof_select.value = prof
    }
    container.appendChild(prof_select) 
}

function addSense(valueSet = null, numValue = null){
    const container = document.getElementById('additional-senses')
    container.classList.remove('hidden')
    const div = document.createElement('div')
    div.classList.add('flex')
    const senseSelect = document.createElement('select')
    senseSelect.innerHTML = `<optgroup label="Senses">
            <option value="darkvision">Darkvision</option>
            <option value="Blindsight">Blindsight</option>
            <option value="Truesight">Truesight</option>
            <option value="Tremorsense">Tremorsense</option>
            <option value="Other">Other</option>
        </optgroup>`
    senseSelect.classList = "mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    if (valueSet !== null){
        senseSelect.value = valueSet
    }

    const senseNumber = document.createElement('input')
    senseNumber.classList = "form-input mb-4 ml-2 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    senseNumber.type = "number"
    senseNumber.placeholder = "ft."
    if (numValue !== null){
        senseNumber.value = numValue
    }
    div.classList = "flex w-full col-span-4"
    div.appendChild(senseSelect)
    div.appendChild(senseNumber)
    container.appendChild(div)
}

function addLanguage(presetValue = null){
    const container = document.getElementById('additional-languages')
    container.classList.remove('hidden')
    const select = document.createElement('select');
    select.classList = "mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300";
    select.innerHTML = `
        <optgroup label="Common Languages">
            <option value="Common">Common</option>
            <option value="Dwarvish">Dwarvish</option>
            <option value="Elvish">Elvish</option>
            <option value="Giant">Giant</option>
            <option value="Gnomish">Gnomish</option>
            <option value="Goblin">Goblin</option>
            <option value="Halfling">Halfling</option>
            <option value="Orc">Orc</option>
        </optgroup>
        <optgroup label="Rare Languages">
            <option value="Abyssal">Abyssal</option>
            <option value="Celestial">Celestial</option>
            <option value="Deep-speech">Deep Speech</option>
            <option value="Draconic">Draconic</option>
            <option value="Infernal">Infernal</option>
            <option value="Primordial">Primordial</option>
            <option value="Sylvan">Sylvan</option>
            <option value="Undercommon">Undercommon</option>
        </optgroup>
        <optgroup label="Other">
            <option value="Telepathy">Telepathy</option>
            <option value="Other">Other</option>
        </optgroup>`;
    
    // Create the input element for custom value
    const input = document.createElement('input');
    input.type = 'text';
    input.classList = "mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300";
    input.style.display = 'none'; // Hide the input by default
    input.placeholder = 'Type other language';

    // Add event listener to select element to show/hide input
    select.addEventListener('change', function() {
        if (this.value === 'Other') {
            container.classList.add('flex','space-x-3')
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
        }
    });
    // Append select and input elements to the container
    container.appendChild(select);
    container.appendChild(input);



    // add a plue button if user is typing custom language
    // when they click button 
    // addLanguage(customLanguage.value)
}



function addTextAbility(type, setName = null, setDesc = null){
    const container = document.getElementById(`additional-${type}`)
    container.classList.remove('hidden')
    const ability = document.createElement('div')
    ability.classList.add('flex','my-4','p-4','bg-gray-600','bg-opacity-10','border-2','border-gray-600','rounded-lg') // TODO: draggable
    const name = document.createElement('input')
    name.type = 'text'
    name.id = `${type}-name`
    name.classList = "form-input mb-4 w-1/3 bg-gray-600 bg-opacity-30 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    name.placeholder = `${type.charAt(0).toUpperCase() + type.slice(1)} name`
    if (setName !== null){
        name.value = setName
    }

    const desc = document.createElement('textarea')
    desc.classList = "ml-2 w-2/3 bg-gray-600 bg-opacity-30 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 rounded-md transition duration-300" 
    desc.placeholder = `${type.charAt(0).toUpperCase() + type.slice(1)} description`
    if (setDesc !== null){
        desc.value = setDesc
    }

    if (type==='legendary'){
        name.placeholder = 'Legendary Action name'
        desc.placeholder = 'Legendary Action description'
    }
    desc.id = `${type}-desc`
    ability.appendChild(name)
    ability.appendChild(desc)
    container.appendChild(ability)

}
function submitEdit(){
    document.getElementById('basic_info').innerHTML = `<div class="text-lg font-semibold text-white space-y-2">
            <p class="font-bold">${document.getElementById('name').value}</p>
            <p class="text-italic"> ${document.getElementById('size').value} ${document.getElementById('type').value}, ${document.getElementById('alignment1').value + document.getElementById('alignment2').value}</p>
            <p class="font-bold"> Armor Class: ${document.getElementById('armor_class').value} (${document.getElementById('armor_class_type').value})</p>
            <div class="flex text-md items-center">


            </div>
        </div>`
}

    // function formatSpecialAbilities(data){
    //     let htmlContent = '<hr><br><div>'
    //     for (let step = 0; step < data['special_abilities'].length; step++) {
    //         htmlContent += `<strong>${data['special_abilities'][step]['name']}</strong> ${data['special_abilities'][step]['desc']}<br><br>`
    //     }
    //     htmlContent +='</div>'

    //     return htmlContent
    // }


    
    
    // function formatActions2(data){
    //     const atk_bonus_acts = data['actions'].filter((action) => 'attack_bonus' in action)
    //     const dmg_acts = data['actions'].filter((action) => 'damage' in action)
    //     let action_i = 0;
    //     let htmlContent = '<div><br><strong>Actions: </strong><hr>'+
    //                         '<div class="flex">'+
    //                             '<div class="grid grid-cols-5 gap-3">';
    //                                 for (let step = 0; step < data['actions'].length; step++) {
    //                                     let action = data['actions'][step]
    //                                     htmlContent += `<div class="col-span-4"><strong>${data['actions'][step]['name']}</strong> ${data['actions'][step]['desc']}<br><br></div><div class="col-span-1">`;
    //                                     if (action['attack_bonus']){
    //                                         htmlContent += createRollButton('Attack Roll', `1d20+${action['attack_bonus']}`,'Roll to Hit');
    //                                     }
    //                                     if (action['damage']){
    //                                         action['damage'].forEach((damage) =>{
    //                                             const damage_type = action['damage'][damage]['damage_type']['name']
    //                                             htmlContent += createRollButton(`Damage Roll (${damage_type})`,`${action['damage'][damage]['damage_dice']}`,'Roll for Damage');
    //                                         })
    //                                     }
    //                                     htmlContent +='</div>'


                                       
    //                                 };
    //                         htmlContent +='</div></div></div>';
    //     return htmlContent
    // }


        
    
    // function formatLegnedaryActions(data){
    //     let htmlContent = '<div>'
    //     if (data['legendary_actions'].length>0){
    //         htmlContent += '<br><strong>Lengendary Actions: </strong><hr>'
            
    //         for (let step = 0; step < data['legendary_actions'].length; step++) {
    //             htmlContent += `<strong>${data['legendary_actions'][step]['name']}</strong> ${data['legendary_actions'][step]['desc']}<br>`
                
    //         }
    //     }
    //     htmlContent +='</div>'

    //     return htmlContent
    // }

    // function formatActions(data){
    //     let htmlContent = `<div>
    //         <br><strong>Actions: </strong>
    //         <hr class="my-2">
    //         <div class="flex flex-wrap -mx-3">`

    //         data['actions'].forEach((action, index) => {
    //             htmlContent += `
    //             <div class="w-full md:w-3/4 px-3 mb-6 ">
    //                 <strong>${action['name']} </strong>: ${action['desc']}
    //             </div>
    //             <div class="w-full md:w-1/4 px-3 mb-6 flex flex-col space-y-2">`

    //             if('attack_bonus' in action) {
    //                 const button_classes = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    //                 htmlContent += createRollButton(`${action['name']} Attack Roll`, `1d20+${action['attack_bonus']}`, 'Roll to Hit');
    //             }
    //             if('damage' in action && action['damage']){
    //                 const button_classes = `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`
    //                 const damage_type = action['damage'][0]['damage_type']['name']
    //                 const damagesJson = JSON.stringify(action['damage'])
    //                 htmlContent += createRollButton(`Damage Roll (${damage_type})`, `${action['damage'][0]['damage_dice']}`, 'Roll for Damage', damagesJson);

    //             }
    //             htmlContent += `</div>`
    //         })
    //         htmlContent += `</div></div>`
    //         return htmlContent
    // }


    // function roll(roll_type, dice_formula, damagesJson = '[]'){
    //     try {
    //         const decodedJson = decodeURIComponent(damagesJson); 

           
    //         const damages = JSON.parse(decodedJson);
            
    //         const displayElement = document.getElementById('roll-result-display');
    //         displayElement.classList.remove('hidden');
    
    //         if (damages.length > 0){
    //             let resultsHTML = `<div class="flex items-center"><strong>Damage Roll:</strong>`;
    //             let emojiTOdamage = {
    //                 'piercing' : '🗡',
    //                 'acid' : '🦠'
    //             }
    //             damages.forEach((damage, index) => {
    //                 let roll_result = rollDice(damage['damage_dice']);
    //                 let sep = damages.length > 1 && index < damages.length-1 ? '<span class="mx-">and</span>' : ''                    
    //                 resultsHTML += `
    //                     <div class="items-center space-x-2 py-2">
    //                         <p class="font-semibold ml-1"> ${roll_result} points of ${damage['damage_type']['index']} damage ${sep}</p>
    //                     </div>`
    //             });
                
    //             displayElement.innerHTML = resultsHTML + '</div>'
    //         }
    //         else{
    //         const roll_result = rollDice(dice_formula)
    //         displayElement.innerHTML = `<strong>${roll_type} | </strong> ${roll_result}`
    //         }

    //     } catch (error) {
    //         console.error("Error parsing JSON: ", error)
    //     }
    // }

    // function createRollButton(roll_type, dice_formula, message, damagesJSON='[]'){
    //     const encodedDamages = encodeURIComponent(damagesJSON);
    //     return `<button class="bg-blue-700 rounded p-1 ml-2" 
    //                 onclick="roll('${roll_type}','${dice_formula}','${encodedDamages}')">
    //                 ${message}
    //             </button>`
    // }
    
    
    // function rollDice(dice_formula){

    //     const parts = dice_formula.split('+')
    //     const diceParts = parts[0].split('d')

    //     const numOfDice = parseInt(diceParts[0], 10)
    //     const diceSides = parseInt(diceParts[1], 10)
        
    //     const modifier = parts.length > 1 ? parseInt(parts[1], 10) : 0

    //     let sum = 0

    //     for (let die = 0; die < numOfDice; die ++){
    //         sum += Math.round(Math.random() * (diceSides-1) + 1)
    //     }
    //     return sum + modifier
        

    // }

    // Sparkle icon: <span class="text-yellow-400">&#10024;</span>
    // Cross: <span class="text-gray-500">&#x2020;</span>
    // Vertical bar rounded: <span class="text-gray-500">&#x2758;</span>

    function createInfoDiv(data) {
        const div = document.createElement('div');
        div.classList = 'p-4 bg-opacity-20 bg-black rounded-lg shadow-lg backdrop-blur-sm backdrop-filter';
        
        div.appendChild(createSection('basic_info', formatBasicInfoMON(data)));
        div.appendChild(createSection('speed', formatSpeed(data)));
        div.appendChild(createSection('abilities', formatAbilities(data)));
        div.appendChild(createSection('saves', formatAttributes(data, 'Saving Throw')));
        div.appendChild(createSection('skills', formatAttributes(data, 'Skill')));
        div.appendChild(createSection('other_attributes', formatMoreAttributes(data)));
        div.appendChild(createSection('special_abilities', formatSpecialAbilities(data)));
        div.appendChild(createSection('actions', formatActions(data)));
        div.appendChild(createSection('legendary_actions', formatLegendaryActions(data)));
        
        return div;
    }
    
    function createSection(id, content) {
        const section = document.createElement('div');
        section.className = 'rounded text-white';
        section.id = id;
        section.innerHTML = '';
        section.appendChild(content instanceof HTMLElement ? content : document.createRange().createContextualFragment(content));
        return section;
    }
    
    function showNotification(message, messageColor) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `${messageColor} text-white px-4 py-2 rounded-md mb-2`;
        notification.classList.remove('hidden');
        if (messageColor === 'bg-green-500') {
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 1500);
        }
    }
    
    function formatBasicInfoMON(data) {
        const container = document.createElement('div');
        container.id = 'basicInfo'
        container.className = 'text-lg font-semibold text-white space-y-2';
    
        const nameElement = document.createElement('p');
        nameElement.className = 'font-bold';
        nameElement.textContent = data.name;
    
        const typeElement = document.createElement('p');
        typeElement.className = 'text-italic';
        typeElement.textContent = `${data.size} ${data.type}, ${data.alignment}`;
    
        const armorClassElement = document.createElement('p');
        armorClassElement.className = 'font-bold';
        armorClassElement.textContent = `Armor Class: ${data.armor_class[0].value} (${data.armor_class[0].type})`;
    
        const hitPointsContainer = document.createElement('div');
        hitPointsContainer.className = 'flex text-md items-center';
    
        const hitPointsElement = document.createElement('p');
        hitPointsElement.className = 'font-bold';
        hitPointsElement.textContent = `Hit Points: ${data.hit_points}`;
    
        const rollButton = createRollButton('Hit Points', data['hit_points_roll'], data['hit_points_roll']);
        console.log('roll btn:', rollButton)
        hitPointsContainer.appendChild(hitPointsElement);
        hitPointsContainer.appendChild(rollButton);
    
        container.appendChild(nameElement);
        container.appendChild(typeElement);
        container.appendChild(armorClassElement);
        container.appendChild(hitPointsContainer);
    
        return container.outerHTML;
    }
    
    function formatSpeed(data) {
        let speedText = '';
        Object.entries(data.speed).forEach(([type, speed]) => {
            speedText += speedText ? `, ${type} ${speed}` : ` ${speed}`;
        });
        return `<strong class="text-lg"> Speed: </strong>` + speedText + '<br>';
    }
    
    function formatAttributes(data, type) {
        const proficiencies = data.proficiencies
            .filter(prof => prof.proficiency.name.startsWith(type))
            .map(prof => `${prof.proficiency.name.split(': ')[1]} +${prof.value}`);
    
        const div = document.createElement('div')
        div.classList = "flex items-center"
        div.innerText = type+'s: '
        if (proficiencies.length > 0) {
            proficiencies.forEach(proficiency => {
                const mod = proficiency.split(' ');
                const p = document.createElement('p')
                p.innerText = mod[0]
                const roll_type = type === 'Skill' ? mod[0] + ' Check ' : mod[0] + ' ' + type
                const dice_formula = `1d20${mod[1]}`
                const button = createRollButton(roll_type, dice_formula, mod[1])
                div.appendChild(p)
                div.appendChild(button)
            })
            
            // htmlContent = `<div class="flex items-center">${type}s: `;
            // proficiencies.forEach(proficiency => {
            //     const mod = proficiency.split(' ');
            //     htmlContent += `<p>${mod[0]}  </p>
            //     <button class="bg-blue-700 rounded p-1 m-2" onclick="roll('${type === 'Skill' ? mod[0] + ' Check ' : mod[0] + ' ' + type} ', '1d20${mod[1]}')">
            //     ${mod[1]}
            //     </button>`;
            // });
            // htmlContent += '</div>';
        }
        return div.outerHTML;
    }
    
    function formatAbilities(data) {
        const abilities = [
            { key: 'STR', value: data.strength },
            { key: 'DEX', value: data.dexterity },
            { key: 'CON', value: data.constitution },
            { key: 'INT', value: data.intelligence },
            { key: 'WIS', value: data.wisdom },
            { key: 'CHA', value: data.charisma }
        ];
    
        const abilityContainer = document.createElement('div');
        abilityContainer.className = "z-50 flex justify-around text-center text-white text-lg font-semibold my-2";
    
        abilities.forEach(ability => {
            const mod = Math.floor((ability.value - 10) / 2);
            const attributeDiv = document.createElement('div');
            attributeDiv.className = "attribute";
            attributeDiv.innerHTML = `
                <div class="font-bold mb-1">${ability.key}</div>
                <div>${ability.value}</div>`;
            const rollButton = createRollButton(`${ability.key} Check`, `1d20+${mod}`, mod > 0 ? `+ ${mod}` : `${mod}`);
            attributeDiv.appendChild(rollButton);
            abilityContainer.appendChild(attributeDiv);
        });
    
        const containerWrapper = document.createElement('div');
        containerWrapper.innerHTML = '<hr>';
        containerWrapper.appendChild(abilityContainer);
        containerWrapper.innerHTML += '<hr>';
    
        return containerWrapper.outerHTML;
    }
    
    function formatMoreAttributes(data) {
        let htmlContent = '<div>';
    
        if (data.damage_vulnerabilities.length > 0) {
            const dmg_vuls = data.damage_vulnerabilities.join(', ');
            htmlContent += `<strong>Damage Vulnerabilities:</strong> ${dmg_vuls}<br>`;
        }
    
        if (data.damage_resistances.length > 0) {
            const dmg_reses = data.damage_resistances.join(', ');
            htmlContent += `<strong>Damage Resistances:</strong> ${dmg_reses}<br>`;
        }
    
        if (data.damage_immunities.length > 0) {
            const dmg_immuns = data.damage_immunities.join(', ');
            htmlContent += `<strong>Damage Immunities:</strong> ${dmg_immuns}<br>`;
        }
    
        if (data.condition_immunities.length > 0) {
            const con_immuns = data.condition_immunities.map(immunity => immunity.name).join(', ');
            htmlContent += `<strong>Condition Immunities:</strong> ${con_immuns}<br>`;
        }
    
        htmlContent += `<strong>Senses: </strong>`;
    
        if (data.senses.darkvision) {
            const dv = data.senses.darkvision;
            htmlContent += `darkvision: ${dv}, `;
        }
        if (data.senses.blindsight) {
            const bs = data.senses.blindsight;
            htmlContent += `blindsight: ${bs}, `;
        }
        if (data.senses.truesight) {
            const ts = data.senses.truesight;
            htmlContent += `truesight: ${ts}, `;
        }
        if (data.senses.tremorsense) {
            const tse = data.senses.tremorsense;
            htmlContent += `tremorsense: ${tse}, `;
        }
        const pp = data.senses.passive_perception;
        htmlContent += `passive perception: ${pp} <br>`;
        htmlContent += `<strong>Languages: </strong>${data.languages}`;
        htmlContent += `<br><strong>Challenge Rating: </strong>${data.challenge_rating} (${data.xp} xp)<br>`;
        htmlContent += '</div>';
    
        return htmlContent;
    }
    
    function formatSpecialAbilities(data) {
        let htmlContent = '<hr><br><div>';
        data.special_abilities.forEach(ability => {
            htmlContent += `<strong>${ability.name}</strong> ${ability.desc}<br><br>`;
        });
        htmlContent += '</div>';
        return htmlContent;
    }
    
    function formatActions(data) {
        let htmlContent = `<div>
            <br><strong>Actions: </strong>
            <hr class="my-2">
            <div class="flex flex-wrap -mx-3">`;
    
        data.actions.forEach(action => {
            htmlContent += `
            <div class="w-full md:w-3/4 px-3 mb-6">
                <strong>${action.name}</strong>: ${action.desc}
            </div>
            <div class="w-full md:w-1/4 px-3 mb-6 flex flex-col space-y-2">`;
    
            if ('attack_bonus' in action) {
                htmlContent += createRollButton(`${action.name} Attack Roll`, `1d20+${action.attack_bonus}`, 'Roll to Hit').outerHTML;
            }
            if ('damage' in action && action.damage) {
                const damage_type = action.damage[0].damage_type.name;
                const damagesJson = JSON.stringify(action.damage);
                htmlContent += createRollButton(`Damage Roll (${damage_type})`, `${action.damage[0].damage_dice}`, 'Roll for Damage', damagesJson).outerHTML;
            }
            htmlContent += `</div>`;
        });
        htmlContent += `</div></div>`;
        return htmlContent;
    }
    
    function formatLegendaryActions(data) {
        let htmlContent = '<div>';
        if (data.legendary_actions.length > 0) {
            htmlContent += '<br><strong>Legendary Actions: </strong><hr>';
            data.legendary_actions.forEach(action => {
                htmlContent += `<strong>${action.name}</strong> ${action.desc}<br>`;
            });
        }
        htmlContent += '</div>';
        return htmlContent;
    }
    
    function roll(roll_type, dice_formula, damagesJson = '[]') {
        console.log(`Rolling for ${roll_type} with formula ${dice_formula}`);
        try {
            const decodedJson = decodeURIComponent(damagesJson);
            const damages = JSON.parse(decodedJson);
            const displayElement = document.getElementById('roll-result-display');
            displayElement.classList.remove('hidden');
    
            if (damages.length > 0) {
                let resultsHTML = `<div class="flex items-center"><strong>Damage Roll:</strong>`;
                damages.forEach((damage, index) => {
                    let roll_result = rollDice(damage.damage_dice);
                    let sep = damages.length > 1 && index < damages.length - 1 ? '<span class="mx-">and</span>' : '';
                    resultsHTML += `
                        <div class="items-center space-x-2 py-2">
                            <p class="font-semibold ml-1">${roll_result} points of ${damage.damage_type.index} damage ${sep}</p>
                        </div>`;
                });
                displayElement.innerHTML = resultsHTML + '</div>';
            } else {
                const roll_result = rollDice(dice_formula);
                displayElement.innerHTML = `<strong>${roll_type} | </strong> ${roll_result}`;
            }
        } catch (error) {
            console.error("Error parsing JSON: ", error);
        }
    }
    
    function appendButtonToContainer(container, button){
    
        // Clear the container / ensure it doesn't replace existing elements incorrectly
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        }
    
        // Append the button
        container.appendChild(button)
    }
    
    
    function createRollButton(roll_type, dice_formula, message, damagesJSON = '[]') {
        const encodedDamages = encodeURIComponent(damagesJSON);
        const button = document.createElement('button');
        button.innerText = message;
        button.classList = 'bg-blue-700 rounded p-1 ml-2';  // this works
        button.onclick = () => {
            console.log('clicky')
        }
        button.addEventListener('mouseover', () => { // this doesn't
            console.log('Mouse over button!');
            button.classList = 'bg-red-700 rounded p-1 ml-2'
        });
    
        button.addEventListener('click',() => {
            roll(roll_type, dice_formula, encodedDamages)   
        })
        return button;
    }
    
    
    
    function rollDice(dice_formula) {
        const parts = dice_formula.split('+');
        const diceParts = parts[0].split('d');
    
        const numOfDice = parseInt(diceParts[0], 10);
        const diceSides = parseInt(diceParts[1], 10);
        const modifier = parts.length > 1 ? parseInt(parts[1], 10) : 0;
    
        let sum = 0;
        for (let die = 0; die < numOfDice; die++) {
            sum += Math.round(Math.random() * (diceSides - 1) + 1);
        }
        return sum + modifier;
    }
     

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


    