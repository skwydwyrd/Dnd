// document.addEventListener('DOMContentLoaded', async ()=>{
//      displayData()
// })

// async function getData() {
//     try {
//         const endpoint = `https://api.scryfall.com`
//         console.log(endpoint)
//         const response = await fetch(endpoint
//             .replaceAll(' ','-')
//             .toLowerCase())
//         const data = await response.json()

//         return data
//     }
//     catch(error) {
//         showNotification(`Error getting data: ${error}`,'bg-red-500')
//     }
// }
// async function displayData() {
//     try {
//         const data = await getData();
//         info_container.classList.remove('hidden')
//         info_container.innerHTML = '';
//         setEditor(data, monster_form)
//         const infoDiv = createInfoDiv(data);
//         info_container.appendChild(infoDiv);
//     } catch (error) {
//         showNotification(`Error displaying data: ${error}`,'bg-red-500')
//     }
// }


function showStats(set, divId){
    // show stats for the set; things like how many cards of each rarity there are and how much the priciest card(s) is/are
    let stats = {
        'Common':0,
        'Uncommon':0,
        'Rare':0,
        'Mythic':0,
        'Total':0,
        'Most_expensive':{
            'card_name':'',
            'price':0,
        },
        'Least_expensive':{
            'card_name':'',
            'price':0,
        }
    }
    const container = document.getElementById(divId)
    container.classList.toggle('hidden')
    // document.getElementById(`${set}-run-btn`).classList.toggle('border-b-2')
    // document.getElementById(`${set}-stats-btn`).classList.toggle('border-b-2')
    if(container.innerHTML === ''){

        if(set==='mh3'){
            stats.Common = 85
            stats.Uncommon = 121
            stats.Rare = 79
            stats.Mythic = 24
            stats.Total = 309
            stats.Most_expensive.card_name = 'Ulamog, the Defiler'
            stats.Most_expensive.price = 88.22
            stats.Least_expensive.card_name = 'Aerie Auxiliary'
            stats.Least_expensive.price = 0.02
        }
        else if(set==='otj'){
            stats.Common = 96
            stats.Uncommon = 100
            stats.Rare = 60
            stats.Mythic = 20
            stats.Total = 276
            stats.Most_expensive.card_name = 'Bristly Bill, Spine Sower'
            stats.Most_expensive.price = 21.11
            stats.Least_expensive.card_name = 'Armored Armadillo'
            stats.Least_expensive.price = 0.01
        }

        else if(set==='pip'){
            stats.Common = 27
            stats.Uncommon = 103
            stats.Rare = 194
            stats.Mythic = 14
            stats.Total = 336
            stats.Most_expensive.card_name = 'Crucible of Worlds'
            stats.Most_expensive.price = 22.01
            stats.Least_expensive.card_name = 'Heroic Reinforcements'
            stats.Least_expensive.price = 0.06
        }
        
        container.classList.add('grid','grid-cols-2','grid-rows-6','bg-gray-700','p-4')
        Object.entries(stats).slice(0,5).forEach(i =>{
            console.log(Object.keys(stats))
            console.log(i)
            container.innerHTML+= `<p class='justify-items-start'>${i[0]}:</p> <p class='justify-items-end'>${i[1]}</p>`
            
        })
        container.innerHTML+=`<p class='justify-items-start'>Most Expensive Card:</p>
        <div class='flex grid grid-cols-2'>
            <p>${stats.Most_expensive.card_name}</p>
            <p>$${stats.Most_expensive.price}</p>
        </div>
        `
        container.innerHTML+=`<p class='justify-items-start'>Least Expensive Card:</p>
        <div class='flex grid grid-cols-2'>
            <p>${stats.Least_expensive.card_name}</p>
            <p>$${stats.Least_expensive.price}</p>
        </div>
        `
    }
}