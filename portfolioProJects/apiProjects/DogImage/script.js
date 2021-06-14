// go to the endpoint and make that connection

// get back json - if all is ok

// parse the json

// do something with parsed json

// handle errors

let image = document.getElementById('pic');
image.setAttribute('src', "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_5176.jpg");

let endpoint = "https://dog.ceo/api/breeds/image/random";

let button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    fetch(endpoint) // actualy a url?
    .then(response => {
        if(response.ok){
        return response.json(); // is data ok? or do you parse it? when you parse it you convert into an object
        }
        throw Error('Oh no, you broke it again!!!')
    }) 
    .then(data => image.setAttribute('src', data.message)) // do something with the object
    .catch(err => console.log(err))
})

