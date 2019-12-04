function ready () {

    let form = document.forms.country_select;

    let country_ = form.elements.country;

    let _country = country_.value;

    let input = form.elements.amount;

    
    amount.oninput = function() {
        console.log(country.value);
        if (country.value == "canada") {
            
            let amount_ = input.value;
            rounding = amount_*1.31951;
            rounded = Math.round(rounding*100)/100;
            output.innerHTML = rounded;
            loss.innerHTML = "-$"+amount_*0.05;
        }
        if (country.value == "europe") {
            
            let amount_ = input.value;
            rounding = amount_*2;
            rounded = Math.round(rounding*100)/100;
            output.innerHTML = rounded;
            loss.innerHTML = "-$"+amount_*0.05;
        }

        
    }

    
}




document.addEventListener("DOMContentLoaded", ready);