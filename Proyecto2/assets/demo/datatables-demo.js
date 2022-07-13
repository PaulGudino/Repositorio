fetchdata_tabla = async(id) =>{
  try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      const pokemon = {
          codigo: data.id,
          nombre : data.name,
          altura: data.height/10,
          peso: data.weight/10,
          atk_spc : data.stats[3].base_stat,
          def_spc : data.stats[4].base_stat
      }
      InformacionPokemon(pokemon)
  } catch (error) {
      console.log(error)
  }
}
InformacionPokemon = (pokemon) =>{
  codigo.push(pokemon.codigo)
  nombre.push(pokemon.nombre)
  atk_esp.push(pokemon.atk_spc)
  def_esp.push(pokemon.def_spc)
  peso.push(pokemon.peso)
  altura.push(pokemon.altura)
}


function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let select = document.querySelector('div.selector > select');
const llenar_tabla = () =>{
  for(let elemento = 0; elemento < pokemones_utilizar; elemento++){
      plantilla =     `<tr>
                      <td>${codigo[elemento]}</td>
                      <td>${nombre[elemento]}</td>
                      <td>${tipos[elemento]}</td>
                      <td>${altura[elemento]}</td>
                      <td>${peso[elemento]}</td>
                      <td>${atk_esp[elemento]}</td>
                      <td>${def_esp[elemento]}</td>
                      </tr>`;
      document.getElementById('tableBody').innerHTML += plantilla
  }
  for(elemento in tipos_claves){
      let plantilla_tipos = `<option value= "${tipos_claves[elemento]}">${capitalizarPrimeraLetra(tipos_claves[elemento])}</option>`
      select.innerHTML += plantilla_tipos;
  }
}

select.addEventListener("change",function(){
  document.getElementById('tableBody').innerHTML = '';
  for(let elemento = 0; elemento < pokemones_utilizar; elemento++){
      if(select.value == "Todos"){
          plantilla =     `<tr>
                          <td>${codigo[elemento]}</td>
                          <td>${nombre[elemento]}</td>
                          <td>${tipos[elemento]}</td>
                          <td>${altura[elemento]}</td>
                          <td>${peso[elemento]}</td>
                          <td>${atk_esp[elemento]}</td>
                          <td>${def_esp[elemento]}</td>
                          </tr>`;
          document.getElementById('tableBody').innerHTML += plantilla
      }
      else if(tipos[elemento] == select.value){
        plantilla =     `<tr>
                        <td>${codigo[elemento]}</td>
                        <td>${nombre[elemento]}</td>
                        <td>${tipos[elemento]}</td>
                        <td>${altura[elemento]}</td>
                        <td>${peso[elemento]}</td>
                        <td>${atk_esp[elemento]}</td>
                        <td>${def_esp[elemento]}</td>
                        </tr>`;
          document.getElementById('tableBody').innerHTML += plantilla
      }
  }
})