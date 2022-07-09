// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
let tipos = []
let counts = {}
let tipos_claves = []
let tipos_cantidad = []

fetchdata_grafica = async(id) =>{
  try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      const pokemon = {
          tipo: data.types[0].type.name,
      }
      tipos.push(pokemon.tipo)
  } catch (error) {
      console.log(error)
  }
}

document.addEventListener("DOMContentLoaded", async()=>{
  for(let x = 1 ;  x < pokemones_utilizar +1 ; x ++){
      await fetchdata_grafica(x)
 }
 tipos.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    tipos_claves = Object.keys(counts);
    tipos_cantidad = Object.values(counts);

    var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: tipos_claves,
        datasets: [{
          label: "Cantidad:",
          lineTension: 0.3,
          backgroundColor: "#3FC9D1",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: tipos_cantidad,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 15
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 20,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    }); 
})



