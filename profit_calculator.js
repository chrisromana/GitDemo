//creating objects

    const costVal = document.querySelector("#cost");
    const taxVal =  document.querySelector("#tax");
    const sellingPrice =  document.querySelector("#sellingPrice");
    const shippingFee =  document.querySelector("#shippingFee"); 
    const promoRate =  document.querySelector("#promoRate"); 
    const totalCost = document.querySelector("#totalCost");
    const ebayFee = document.querySelector("#ebayFee");
    const promoAmount = document.querySelector("#promoAmount");
    const totalFees = document.querySelector("#totalFees");
    const grossProfit = document.querySelector("#grossProfit");
    const netProfit = document.querySelector("#netProfit");
    const netRate = document.querySelector("#netRate");
    const submitBtn = document.querySelector("#submit");
    const resetBtn = document.querySelector("#reset");
    const allInput = document.querySelector("input");

    costVal.addEventListener('input' , (e) => {
        taxVal.value = (e.target.value * .10).toFixed(2);
        totalCost.value = (Number(e.target.value) + Number(taxVal.value)).toFixed(2);
    });

    sellingPrice.addEventListener('input', e => {  
        ebayFee.value = ((e.target.value*.1260) + .30).toFixed(2); 
        promoAmount.value = ((e.target.value)*(promoRate.value)/100).toFixed(2);
        totalFees.value = (Number(shippingFee.value) + Number(ebayFee.value) + Number(promoAmount.value)).toFixed(2);
        grossProfit.value = (Number(e.target.value) - Number(totalCost.value)).toFixed(2);
        netProfit.value = (grossProfit.value - totalFees.value).toFixed(2);
        netRate.value = ((netProfit.value)/(totalCost.value) * 100).toFixed(2);
        if (netRate.value < 0) {
            netProfit.style.background="#ffcccc";
            netRate.style.background="#ffcccc";
         } else {
             netProfit.style.background="#c6ecc6";
             netRate.style.background="#c6ecc6";
         }
    });

function getCalculation() {

    //assigning values
    let calcTax = costVal.value * .10;
    taxVal.value = (costVal.value * .10).toFixed(2);
    let calctotalCost = Number(costVal.value) + calcTax;
    totalCost.value=calctotalCost.toFixed(2);
    let caclTotalEbayFee = Number(sellingPrice.value)*.1260 + .30;
    ebayFee.value=caclTotalEbayFee.toFixed(2);
    let caclPromoAmount = Number(sellingPrice.value)*Number(promoRate.value)/100;
    promoAmount.value=caclPromoAmount;
    let calcTotalFees = Number(shippingFee.value) + caclTotalEbayFee + caclPromoAmount;
    totalFees.value = calcTotalFees.toFixed(2);
    let calcGrossProfit = Number(sellingPrice.value) - calctotalCost;
    grossProfit.value=calcGrossProfit.toFixed(2);
    let calcNetProfit = Number(sellingPrice.value) - calctotalCost - calcTotalFees;
    netProfit.value=calcNetProfit.toFixed(2);
    netProfit.style.fontWeight='bold';
    netRate.value=(calcNetProfit/calctotalCost * 100).toFixed(2);
    netRate.style.fontWeight='bold';
    if (calcNetProfit < 0) {
       netProfit.style.background="#ffcccc";
       netRate.style.background="#ffcccc";
    } else {
        netProfit.style.background="#c6ecc6";
        netRate.style.background="#c6ecc6";
    }
}

submitBtn.addEventListener('click', function() {
    getCalculation();
});

window.addEventListener('keyup', function(event) {
    if(event.code === 'Enter' | event.code === 'NumpadEnter') {
        event.preventDefault();
        submitBtn.click();
    }
    if(event.code === 'Space') {
        event.preventDefault();
        resetBtn.click();
    }
});

 function resetForm(){
    document.querySelector("#firstForm").reset();
    netRate.style.background="";
    netProfit.style.background="";
} 

resetBtn.addEventListener('click', function() {
    resetForm();
});

  