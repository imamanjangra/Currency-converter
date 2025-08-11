

let api_url = "https://api.frankfurter.app/latest?from=INR&to=USD";

let amount_input = document.querySelector(".amount_input");// input value frome Entre amount 
let submit_btn = document.querySelector(".submit_btn");

submit_btn.addEventListener('click' , (e)=>{
    e.preventDefault();
    console.log(amount_input.value);
    
})



