let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  let tbody = document.getElementById("tbody");
  let formData = document.getElementById("form"); 
  let foodArr = []; 

  let firstNmae = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let address = document.getElementById("address").value;
  let state = document.getElementById("State").value;
  let counrty = document.getElementById("Country").value;
  let pincode = document.getElementById("pincode").value;
//   let male = document.getElementById("male").value;
  let genderObj = document.getElementsByName("gender");
  let gender = '';

  for(let i in genderObj){
    if(genderObj[i].checked){
       gender = genderObj[i].value;
    }
  }

  

  let pizza = document.getElementById("Pizza");
  let sushi = document.getElementById("Sushi");
  let burgers = document.getElementById("Burgers");
  let ramen = document.getElementById("Ramen");
  let tacos = document.getElementById("Tacos");

  if(pizza.checked){
    foodArr.push(pizza.value)
  }
  if(sushi.checked){
    foodArr.push(sushi.value)
  }
  if(burgers.checked){
    foodArr.push(burgers.value)
  }
  if(ramen.checked){
    foodArr.push(ramen.value)
  }
  if(tacos.checked){
    foodArr.push(tacos.value)
  }

  if(foodArr.length < 2){
    alert('You must atleast select 2 best foods')
  }else{
    if (firstNmae == '' || lastName == ''|| gender == '' || address == '' || state == '' || pincode == '' || counrty == '') {
        alert("Please make sure you enter all the details");
      } else {
        let tr = document.createElement("tr");
    
        let thfirstNmae = document.createElement("th");
        let thlastName = document.createElement("th");
        let thaddress = document.createElement("th");
        let thpincode = document.createElement('th');
        let thstate = document.createElement('th');
        let thcountry = document.createElement('th');
        let thgender = document.createElement('th');
        let thfood = document.createElement('th');

        let foods = '';
        for(let a in foodArr){
           foods = foods +  foodArr[a] + ',' ;
        }

        newFood = foods.slice(0,-1);
    
        thlastName.innerText = lastName;
        thfirstNmae.innerText = firstNmae;
        thaddress.innerHTML = address;
        thpincode.innerHTML = pincode;
        thstate.innerHTML = state;
        thcountry.innerHTML = counrty;
        thgender.innerHTML = gender;
        thfood.innerHTML = newFood;
    
        tr.append(thfirstNmae, thlastName, thaddress, thstate, thcountry , thpincode, thgender,thfood);
        tbody.appendChild(tr);
      }
  }
  formData.reset();
});
