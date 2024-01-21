let button = document.getElementById("result");

button.addEventListener('click', expensesProfit)

function expensesProfit() {

    let num1 = Number(document.getElementById("retail_price").value);
    let num2 = Number(document.getElementById("tax").value);
    let num3 = Number(document.getElementById("cost_price").value);
    let num4 = Number(document.getElementById("MP_commission").value);
    let num5 = Number(document.getElementById("logistics_customer").value);
    let num6 = Number(document.getElementById("logistics_SC").value);
    
    document.getElementById("summa_naloga").innerHTML = num1 * (num2 / 100);
    document.getElementById("commission").innerHTML = num1 * (num4 / 100);

    let num7 = Number( document.getElementById('summa_naloga').innerText);
    let num8 = Number( document.getElementById('commission').innerText);

    document.getElementById("expenses").innerHTML = num3 + num5 + num6 + num7 + num8;

    let num9 = Number( document.getElementById('expenses').innerText);

    document.getElementById("net profit").innerHTML = num1 - num9;

    let num10 = Number( document.getElementById('net profit').innerText);
    
    let num11 = (num10/num3)*100;
    let num12 = (num10/num1)*100;

    document.getElementById('percentage_cost').innerHTML = (Math.round(num11 * 100) / 100);
    document.getElementById('percentage_revenue').innerHTML = (Math.round(num12 * 100) /100);
    
    const modal_order = document.querySelector('[data-form]');
    modal_order.classList.remove('tooltip_hidden');
    
    const buttonClose = document.querySelector('[data-cart_order]');
    buttonClose.addEventListener('click', function(){
        modal_order.classList.add('tooltip_hidden');
    });
 }
 
 console.log('fgfg');

 const input = document.querySelector('#retail_price');
 const content = document.querySelector('#name-tooltip');
 
 button.addEventListener('input', function(){
     console.log('fgfg');
     content.classList.toggle('tooltip');
 });
 
