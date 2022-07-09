/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
//
let pokemones_utilizar = 20
let codigo = []
let nombre = []
let altura = []
let peso = []
let atk_esp = []
let def_esp = []
let s_altura = 0, s_peso = 0, s_atkesp = 0, s_defesp = 0

const promedio = async() =>{
    for (let i = 0; i < pokemones_utilizar; i++) {
        s_altura += altura[i];
        s_peso += peso[i];
        s_atkesp += atk_esp[i];
        s_defesp += def_esp[i];
    }
    s_altura = s_altura/pokemones_utilizar,
    s_peso = s_peso/pokemones_utilizar
    s_atkesp =s_atkesp/pokemones_utilizar
    s_defesp = s_defesp/pokemones_utilizar
}

const getRamdomInt = (min, max) =>{
    return Math.floor(Math.random() * (max-min)) + min;         
}

const fetchdata = async(id) =>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()

        const pokemon = {
            img : data.sprites.other.dream_world.front_default,
            nombre : data.name,
            hp: data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            velocidad: data.stats[5].base_stat,
        }

        rellenarCard(pokemon)
    } catch (error) {
        console.log(error)
    }
}

const rellenarCard = (pokemon) =>{
    const flex = document.querySelector(".flex")
    const template = document.querySelector("#template-card").content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector(".card-body-img").setAttribute("src", pokemon.img)
    clone.querySelector(".card-body-title").innerHTML = `${pokemon.nombre} <span>${pokemon.hp} hp</span>`
    clone.querySelector(".card-body-text").textContent = "Exp " + pokemon.experiencia

    document.querySelectorAll(".card-nueva")[0].textContent = pokemon.ataque;
    document.querySelectorAll(".card-nueva")[1].textContent = pokemon.defensa;
    document.querySelectorAll(".card-nueva")[2].textContent = pokemon.velocidad;

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}

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


const llenar_tabla = () =>{
    for(let elemento = 0; elemento < pokemones_utilizar; elemento++){
        plantilla =     `<tr>
                        <td>${codigo[elemento]}</td>
                        <td>${nombre[elemento]}</td>
                        <td>${altura[elemento]}</td>
                        <td>${peso[elemento]}</td>
                        <td>${atk_esp[elemento]}</td>
                        <td>${def_esp[elemento]}</td>
                        </tr>`;
        document.getElementById('tableBody').innerHTML += plantilla
    }
}

document.addEventListener("DOMContentLoaded", async()=>{
    const random = getRamdomInt(1,pokemones_utilizar+1)
    await fetchdata(random)
    for(let x = 1 ;  x < pokemones_utilizar +1 ; x ++){
        await fetchdata_tabla(x)
   }
    llenar_tabla()
    await promedio()

    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Altura", "Peso", "Ataque Especial", "Defensa Especial"],
            datasets: [{
            label: "Promedio",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            backgroundColor: ['#5e5e5e', '#6f6f6f', '#828282', '#aaaaaa'],
            data: [s_altura.toFixed(2),s_peso.toFixed(2),s_atkesp.toFixed(2),s_defesp.toFixed(2)],
            }],
        },
        options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'month'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 6
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 100,
                  maxTicksLimit:6
                },
                gridLines: {
                  display: true
                }
              }],
            },
            legend: {
              display: false
            }
          }
    });
})





window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
