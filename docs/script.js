let amount_input = document.querySelector(".amount_input");// input value frome Entre amount 
let submit_btn = document.querySelector(".submit_btn");
let otn1 = document.querySelector(".otn1");
let otn2 = document.querySelector(".otn2");
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let i1 = document.querySelector(".i1");
let option = document.querySelectorAll(".option");
let Answer = document.querySelector("#Answer")


otn1.addEventListener('change' , ()=>{ 
    img1.src = `https://flagsapi.com/${otn1.value}/flat/64.png`;
})
otn2.addEventListener('change' , ()=>{ 
    img2.src = `https://flagsapi.com/${otn2.value}/flat/64.png`;
})


submit_btn.addEventListener('click' , (e)=>{
    e.preventDefault();
    let input_value = amount_input.value;

    if (input_value <= 0 || isNaN(input_value)) {
        alert("Enter a valid value")
    }else{
       let id1 = otn1.querySelector(`option[value="${otn1.value}"]`).id;
        let id2 = otn2.querySelector(`option[value="${otn2.value}"]`).id;

        let api_url = `https://api.currencylayer.com/convert?access_key=acb94aa5ea702b79ad71bee15e7844ec&from=${id1}&to=${id2}&amount=${input_value}`;

        let getdata = async () => {
            console.log("getting data ..");
            let request = await fetch(api_url);
            let data = await request.json();
            console.log(data);

            if (data.result) {
                console.log(`Converted Amount: ${data.result} ${id2}`);
                Answer.innerHTML = `${input_value} ${id1} = ${data.result} ${id2}`
            } else {
                console.log("Error in conversion");
            }
        }
        getdata();

    }
})



