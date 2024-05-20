export const myFormHTML = `<input class="form-input col-span-4  bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
type="text" 
placeholder="Name" 
id="name"
>
<div class="col-span-4 flex space-x-3">
<select class="form-select mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="size">
    <optgroup label="Size">
        <option value="Tiny">Tiny</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="Huge">Huge</option>
        <option value="Gargantuan">Gargantuan</option>
        <option value="Other">Other</option>
    </optgroup>
</select>
<select class="form-select mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="type">
    <optgroup label="Type">
        <option value="Aberration">Aberration</option>
        <option value="Beast">Beast</option>
        <option value="Celestial">Celestial</option>
        <option value="Construct">Construct</option>
        <option value="Dragon">Dragon</option>
        <option value="Elemental">Elemental</option>
        <option value="Fey">Fey</option>
        <option value="Fiend">Fiend</option>
        <option value="Giant">Giant</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Monstrosity">Monstrosity</option>
        <option value="Ooze">Ooze</option>
        <option value="Plant">Plant</option>
        <option value="Undead">Undead</option>
        <option value="Other">Other</option>
    </optgroup>
</select>
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="text" 
    placeholder="Subtype/Tag" 
    id="subtype"
    >
<select class="form-select mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="alignment1">
    <optgroup label="Alignment (Lawful - Chaotic)">
        <option value="lawful">Lawful</option>
        <option value="neutral">Neutral</option>
        <option value="chaotic">Chaotic</option>
        <option value="other">Other</option>
    </optgroup>
</select>
<select class="form-select mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="alignment2">
    <optgroup label="Alignment (Evil - Good)">
        <option value="evil">Evil</option>
        <option value="neutral">Neutral</option>
        <option value="good">Good</option>
        <option value="other">Other</option>
    </optgroup>
</select>
</div>
<div class="col-span-4 flex space-x-3">
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number" 
    placeholder="Armor Class" 
    id="armor_class"
    >
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="text" 
    placeholder="Armor Class Type" 
    id="armor_class_type"
    >
</div>
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
type="text" 
placeholder="Hit Dice" 
id="hit_dice"
>
<div class="col-span-4 space-x-3">
<div class="flex space-x-3">
<select 
    class="form-select bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="speed-type">
    <optgroup label="Speed Type">
        <option value="walk">Walking</option>
        <option value="swim">Swimming</option>
        <option value="fly">Flying</option>
        <option value="climb">Climbing</option>
        <option value="burrow">Burrowing</option>
    </optgroup>
</select>
<input 
    class="form-input ml-2 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number" 
    placeholder="Speed" 
    id="speed-number"
    >
<button 
    class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
    id="add-speed"
    onclick="addSpeed()"
    type="button">
    +
</button>
</div>
</div>
<div class="w-full col-span-4 mb-4" id="additional-speeds"></div>
<div class="col-span-4 flex space-x-3">
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number" 
    min="1"
    max="30"
    placeholder="Strength" 
    id="strength"
    >
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number"
    min="1"
    max="30" 
    placeholder="Dexterity" 
    id="dexterity"
    >
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number" 
    min="1"
    max="30"
    placeholder="Constitution" 
    id="constitution"
    >
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number" 
    min="1"
    max="30"
    placeholder="Intelligence" 
    id="intelligence"
    >
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number"
    min="1"
    max="30" 
    placeholder="Wisdom" 
    id="wisdom"
    >
<input class="form-input mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number"
    min="1"
    max="30" 
    placeholder="Charisma" 
    id="charisma"
    >
</div>
<div class="flex col-span-4">
<select class="form-select bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-hand transition duration-300"
    id="saves">
    <optgroup label="Saving Throw Proficiencies">
        <option value="STR">Strength</option>
        <option value="DEX">Dexterity</option>
        <option value="CON">Constitution</option>
        <option value="INT">Intelligence</option>
        <option value="WIS">Wisdom</option>
        <option value="CHA">Charisma</option>
        <option value="Other">Other</option>
    </optgroup>
</select>
<button 
    class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
    id="add-save"
    onclick="addProf('save')"
    type="button">
    +
</button>
</div>
<div class="w-full col-span-4 mb-4" id="additional-saves"></div>
<div class="flex col-span-4">
<select class="form-select bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-hand transition duration-300"
    id="skills">
    <optgroup label="Skill Proficiencies">
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
    </optgroup>
</select>
<button 
    class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
    id="add-skill"
    onclick="addProf('skill')"
    type="button">
    +
</button>
</div>
<div class="w-full col-span-4" id="additional-skills"></div>
<div class="flex col-span-4">
<select class="form-select mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="senses">
    <optgroup label="Senses">
        <option vale="passive_perception">Passive Perception</option>
        <option value="Darkvision">Darkvision</option>
        <option value="Blindsight">Blindsight</option>
        <option value="Truesight">Truesight</option>
        <option value="Tremorsense">Tremorsense</option>
        <option value="Other">Other</option>
    </optgroup>
</select>
<input class="form-input ml-2 mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
    id="sense-number"
    type="number"
    placeholder = "Score"
    >

<button 
    class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
    id="add-sense"
    onclick="addSense()"
    type="button">
    +
</button>
</div>
<div class="w-full col-span-4" id="additional-senses"></div>
<div class="flex col-span-4">
    <select class="form-select mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300"
        id="languages">
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
    </select>
    <button 
        class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
        id="add-language">
        +
    </button>
</div>
<input class="col-span-4 mb-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block w-full p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
    type="number"
    min="0"
    max="30" 
    placeholder="Challenge Rating" 
    id="challenge_rating"
>
<div class="col-span-2 md:col-span-3 lg:col-span-4 mb-10">
<h2 class="text-center">
    Abilities
</h2>
<div class="flex col-span-2 md:col-span-3 lg:col-span-4">
    <input 
        class="form-input mb-4 w-1/3 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
        type="text"
        id="ability-name"
        placeholder="Ability name">
    <textarea 
        class="form-textarea ml-2 w-2/3 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 rounded-md transition duration-300" 
        placeholder="Ability description"
        id="ability-desc">
    </textarea>
    <button 
        class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
        id="add-ability"
        onclick = "addTextAbility('ability')"
        type = "button">
        +
    </button>
</div>
<div class="text-center" id="additional-ability"></div>

<div class="col-span-2 md:col-span-3 lg:col-span-4 mb-10"></div>
<h2 class="text-center">
    Actions
</h2>
<div class="flex col-span-2 md:col-span-3 lg:col-span-4">
    <input 
        class="form-input mb-4 w-1/3 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
        type="text"
        id="action-name"
        placeholder="Action name">
    <textarea 
        class="form-textarea ml-2 w-2/3 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 rounded-md transition duration-300" 
        placeholder="Action description"
        id="action-desc">
    </textarea>
    <button 
        class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
        id="add-action"
        type="button"
        onclick="addTextAbility('action')">
        +
    </button>
</div>
<div class="text-center" id="additional-action"></div>
</div>
<div class="col-span-2 md:col-span-3 lg:col-span-4 mb-10">
<h2 class="text-center">
    Legendary Actions
</h2>
<div class="flex col-span-2 md:col-span-3 lg:col-span-4">
    <input 
        class="form-input mb-4 w-1/3 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 block p-2.5 rounded-md shadow appearance-none cursor-pointer transition duration-300" 
        type="text"
        id="legendary-action-name"
        placeholder="Action name">
    <textarea 
        class="form-textarea ml-2 w-2/3 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 rounded-md transition duration-300" 
        placeholder="Action description"
        id="legendary-action-desc">
    </textarea>
    <button 
        class="w-12 ml-2 p-2 h-12 bg-gray-600 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 bg-opacity-50 rounded-lg transition duration-300"
        id="add-legendary-action"
        onclick="addTextAbility('legendary')"
        type="button">
        +
    </button>
</div>
<div class="text-center" id="additional-legendary"></div>
</div>
<button 
    class="col-span-2 md:col-span-3 lg:col-span-4 bg-gray-600 bg-opacity-50 border-2 border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 font-bold py-2 px-4 mt-6 rounded rounded-md transition duration-300"
    id="submit_edit">
    Submit
</button>`


