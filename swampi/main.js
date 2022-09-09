console.log('my javascript is working')

let residentButton = document.querySelector('#button1')

let residentsNames = document.querySelector('.residents')

const residentButtonFunction = (event) => {
console.log('button clicked')
axios.get('https://swapi.dev/api/planets/?search=alderaan' ).then((res) => {
    
    console.log(res.data)

// let residentsA = document.getElementsById
// console.log(residentsA)

   
    

    // let residents = res.data


    // for(let i = 0; i < res.data.length; i++){
    //     let header2 = document.createElement('h2')
    //     header2.innerHTML = `<h2>${residents[i]} </h2>`

    //     document.body.appendChild(paragraph)
    //   }
    //unfinished
})
}


residentButton.addEventListener('click', residentButtonFunction)
