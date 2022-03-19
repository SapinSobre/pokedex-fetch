document.getElementById('run').addEventListener('click', async() => {
    let input = document.getElementById('searchName').value.trim();
    
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`);
    let poke = await response.json();
    console.log(poke);
})