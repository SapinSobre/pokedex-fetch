document.getElementById('run').addEventListener('click', async() => {
    let input = document.getElementById('search_input').value.trim();
    if(input != ""){
        try{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
            let poke = await response.json();
            //let pokeId = poke.id;
            console.log(poke);
           /* let titleName = document.getElementById('result_name');
            let photoPoke = document.getElementById('result_img');
            photoPoke.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`);
            titleName.innerText = poke.name;*/
        }
        catch(error){
            console.log('Sorry... No Pokemon with that name!');
        }        
    }
    else throw new Error('Don\'t forget to enter something...');
})