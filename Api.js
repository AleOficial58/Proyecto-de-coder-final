// const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
const urlApiPokemones = 'https://api.nationalize.io/?name=nathaniel'

// let response = await fetch(url);
pruebaAPI(urlApiPokemones)

async function pruebaAPI(url){
    let response = await fetch(url);
    
if (response.ok) { // response.ok == true
    // get the response body (the method explained below)
    // debugger //ACOSTRUMBRATE A DEBUGGUEAR
    // await response.json()
    // .then(resp => {
    //     // console.log(resp)
    //     if(resp != undefined && resp.country.length > 0){ //OJO CON ESTO, SI NO LO SABES SACALO
    //         // console.log(resp.country)
    //         resp.country.forEach(element => {
    //             console.log(element)
    //             console.log(element.country_id)
    //             console.log(element.probability)
    //         });
    //     }
    // })
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

// fetch(url)
// .then(Response => Response.json() )
// .then(data => {
//     console.log(data)
// })
// .catch(err=>console.log(err))
