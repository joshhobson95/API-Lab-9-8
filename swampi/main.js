console.log('my javascript is working')

let residentButton = document.querySelector('#button1')

let residentsNames = document.querySelector('.residents')

const residentButtonFunction = () => {
console.log('button clicked')
axios.get('https://swapi.dev/api/planets/?search=alderaan' ).then((res) => {
    
   const {residents} = res.data.results[0]
    for(let i =0; i < residents.length; i++) {
        const h2s = document.querySelector('h2');
    
axios.get(residents[i])
.then(res => {

    // if(h2s.length > 0){
    //     h2s[i].remove()
    // }

    let h2 = document.createElement('h2')
    h2.textContent = res.data.name;

    document.querySelector('body').appendChild(h2)
})
    }
})
}


residentButton.addEventListener('click', residentButtonFunction)
