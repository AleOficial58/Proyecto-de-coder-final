const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

fetch(url)
.then(Response => Response.json() )
.then(data => {
    console.log(data)
})
.catch(err=>console.log(err))