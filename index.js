document.addEventListener('DOMContentLoaded', ()=>{
  const baseUrl = "http://localhost:3000/phones"

     function renderList(phone){
        //console.log(phone)
        const output = document.getElementById('output')
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="card" style="width: 18rem;">
            <img src="${phone.img}" class="card-img-top" alt="...">  
            <div class="card-body">
              <h5 class="card-title">${phone.name}</h5>
              <p>
              <span class="stock-value">${phone.quantity}</span></p>
              <p class="card-text">${phone.description}</p>
              <button id="purchase" class="btn btn-primary">${phone.price}</button>
              <button id="delete">Sold out</button>
            </div>
          </div>
        `
        const buy =div.querySelector('#purchase')
        buy.addEventListener('click', ()=>{
           // phone.quantity = 1
            //div.querySelector('span').textContent = phone.quantity - 1;
            const remainingStock =(phone.quantity - 1)
            div.querySelector('span').textContent = remainingStock;
            updateData(phone)
        });

        //Delete an element 
        div.querySelector('#delete').addEventListener('click', ()=>{
            div.remove()
           deletePhone(phone.id) 
        })
        output.appendChild(div)  

     };    

//Make a get request to obtain data
function getPhones(){
        fetch(baseUrl)
        .then(response =>response.json())
        .then((data)=> data.forEach((phone)=>renderList(phone)))
    };
    getPhones()


//Make a post request
function postReview(){
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify()
    })
    .then(response=>response.json())
    .then()
}




//Make a patch request
function updateData(phone){
    fetch(`http://localhost:3000/phones/${phone.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json' 
        },
        body:JSON.stringify(phone)
    })
    .then(response=>response.json())
    .then(phone=> console.log(phone))
}




//Delete an item once its out of stock   
function deletePhone(id){
    fetch(`http://localhost:3000/phones/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response=>response.json())
    .then(phone=>console.log(phone))
}
deletePhone()



//Add event listners
const login = document.querySelector('.open-button')
//console.log(login)
login.addEventListener('click',()=>{
    document.getElementById('myForm').innerHTML=""
})


})












