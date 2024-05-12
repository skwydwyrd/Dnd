{/* <optgroup label="Size">
<option value="tiny">Tiny</option>
<option value="small">Small</option>
<option value="medium">Medium</option>
<option value="large">Large</option>
<option value="huge">Huge</option>
<option value="gargantuan">Gargantuan</option>
<option value="other">Other</option>
</optgroup> */}

document.addEventListener('DOMContentLoaded', ()=>{
    let name = document.getElementById('name')
    const suggestions = document.getElementById('suggestions')
    const size_suggestions = ['Tiny', 'Small', 'Medium', 'Large'
        
    ]
    const list = ['aaaaaaaaaaaaahhhhhh!','actions','addition', 'bananas', 'daring']
    name.addEventListener('input',()=>{
        suggestions.innerHTML = ''
        let input = name.value;
        if (input){
            const filtered_list = list.filter(name => name.includes(input))
            filtered_list.forEach(name2 => {
                const element = document.createElement('div')
                element.textContent = name2
                element.classList.add('p-2', 'bg-gray-700', 'bg-opacity-50', 'rounded-xl' ,'text-red-500', 'cursor-pointer')
                element.onclick = ()=>{
                    name.value = name2 // when i click on a filtered name, update my input box to be that value
                    suggestions.innerHTML = ''

                }
                suggestions.appendChild(element)
            })
            suggestions.classList.remove('hidden')
        } else {
            suggestions.classList.add('hidden')
        }
    });
});