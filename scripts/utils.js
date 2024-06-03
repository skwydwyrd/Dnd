export function createInfoDiv(data) {
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

export function showNotification(message, messageColor) {
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

export function roll(roll_type, dice_formula, damagesJson = '[]') {
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


// export function createRollButton(roll_type, dice_formula, message, damagesJSON = '[]') {
//     const encodedDamages = encodeURIComponent(damagesJSON);
//     const button = document.createElement('button');
//     button.innerText = message;
//     button.classList = 'bg-blue-700 rounded p-1 ml-2';  // this works

//     button.addEventListener('mouseover', () => { // this doesn't
//         console.log('Mouse over button!');
//         button.classList = 'bg-red-700 rounded p-1 ml-2'
//     });

//     button.addEventListener('click',() => {
//         roll(roll_type, dice_formula, encodedDamages)   
//     })
//     return button;
// }



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
 