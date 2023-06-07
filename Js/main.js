
//Llamada de los diferentes seelectores utilizados desde el html
const total = document.querySelector("span");
const todo = document.querySelector(".allCost")
const consumo = document.querySelector("#consumo");
const resultDev = document.querySelector("#resultDev");
const resultBill = document.querySelector("#resultBill");
const bruto = document.getElementById("totalBruto");
//arreglo para los consumos
let items =[];

//funcion para agregar ocnsumos
const moreItems = ()=>{
      items.push(parseFloat(consumo.value));
      console.log(items);
      const p = document.createElement("p");
      p.innerText= `$${consumo.value}`;
      console.log(items.value)
      todo.appendChild(p);
      total.innerText=`RD$ ${items.reduce((a  , b) => a + b )}`
      consumo.value=0;
  
}
//funcion para calcular el consumo y devuelta de consumo
const cashEnd = (amount) =>{
   const coins = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
   let result = {};
   const devolucion = [];
   let rest = 0;
   let cash= document.getElementById("cash").value;
   let devol = document.getElementById("devol").value;
   let resto = (devol - cash);
   let res = 0;
   const p = document.createElement("p");
   const span = document.createElement("p");
   resultBill.appendChild(span);
   resultDev.appendChild(p);
   resultDev.innerHTML = `<b><br><br> Devolucion: RD$ ${resto}  </b>`;

   for (let i = 0; i < coins.length; i++){
    const coin = coins[i];
   // console.log("coins del arreglo", coin)
    let coinQuantity = Math.trunc(resto / coin);
    //console.log("probando", coinQuantity)

       if (coinQuantity === 1 || coinQuantity === 3 || coinQuantity === 4){
        res = coins.find( respuesta => {
            console.log("ggggggg ", coinQuantity)
            console.log("ggggggg ", resto)

         coinQuantity = Math.trunc( coin / resto);
            let value = coinQuantity
            value = coins[i];
            console.log("PRUEBAS01......", value)
            resto = resto - value;
            // coinQuantity = Math.trunc( coin / value);
            // value = coins[i];
            console.log("PRUEBAS02......", resto)
            let valueg = [];
            valueg += valueg.push (resto);
            //console.log("appendchild ", valueg)

            resultBill.innerHTML = `<b><br><br> Los billetes son: <br> RD$ ${value} <br> RD$ ${valueg [0]}  </b>`;
            console.log("PRUEBAS......", value)
            coinQuantity = value;
            console.log("coinquantiti", coinQuantity)
            resto = coinQuantity;
            console.log("resto", resto);
          

        });
        
    }else (console.log("NO EXISTE BILLETE"))
}

if(cash === devol){
    resultDev.innerHTML=`<b><br><br> 0.00 </b>`;

} else {

 
console.log("RESTO: ", resto)
   console.log(resultBill)

}
}



    
