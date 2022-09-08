console.log('my javascript is working')

let residentButton = document.querySelector('#button1')



const residentButtonFunction = (event) => {
console.log('button clicked')
axios.get('https://swapi.dev/api/').then((res) =>{
    console.log(res.data)
})
}


residentButton.addEventListener('click', residentButtonFunction)

