function ready () {

    let form = document.forms.country_select;



    let input = form.elements.amount;

    
    (amount || country).oninput = function() {
        console.log(country.value);
        console.log(x_country.value);
        if (x_country.value == "usa") {
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*1.31951;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD"
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" USD";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*0.9050388;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" USD";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*63.6297;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" USD";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*1.4633;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" USD";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*108.6565 ;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" USD";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*7.0353;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" USD";
            }
        }
        if (x_country.value == "canada") {
            
            if (country.value == "usa") {
                
                let amount_ = input.value;
                rounding = amount_*0.7558379;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" USD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*1;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*0.681505;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*48.01784;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*5.315371;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*1.1093;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*82.177;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CAD";
            }
        }   
        if (x_country.value == "europe") {
            
            if (country.value == "usa") {
                
                let amount_ = input.value;
                rounding = amount_*1.10868;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" USD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*1.466925;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*1;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*70.4554;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*7.798963581;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*1.627919317;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*120.566;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" EUR";
            }
        }   
        if (x_country.value == "russia") {
            
            if (country.value == "usa") {
                
                let amount_ = input.value;
                rounding = amount_*0.015737325;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" USD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*0.0208225268;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*0.01418391;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*1;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*0.11078433;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*0.02292376;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*1.711670153;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" RUB";
            }
        }   
        if (x_country.value == "china") {
            
            if (country.value == "usa") {
                
                let amount_ = input.value;
                rounding = amount_*0.14207063;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" USD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*0.18755814;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*0.1280725;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*9.02601783;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*1;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*0.206977615
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounSded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*15.4396;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" CNY";
            }
        }   
        if (x_country.value == "australia") {
            
            if (country.value == "usa") {
                
                let amount_ = input.value;
                rounding = amount_*0.68642488;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" USD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*0.90624338;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*0.61874569;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*43.61239049;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*4.8314785;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*1;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounSded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*74.58652827;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" AUD";
            }
        }   
        if (x_country.value == "japan") {
            
            if (country.value == "usa") {
                
                let amount_ = input.value;
                rounding = amount_*0.00920911;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" USD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
            if (country.value == "canada") {
                
                let amount_ = input.value;
                rounding = amount_*0.01214923;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CAD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
            if (country.value == "europe") {
                
                let amount_ = input.value;
                rounding = amount_*0.00829681;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" EUR";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
            if (country.value == "russia") {
                
                let amount_ = input.value;
                rounding = amount_*0.58506561;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" RUB";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
            if (country.value == "china") {
                
                let amount_ = input.value;
                rounding = amount_*0.06477009;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" CNY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
            if (country.value == "australia") {
                
                let amount_ = input.value;
                rounding = amount_*0.01340749;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounSded+" AUD";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
            if (country.value == "japan") {
                
                let amount_ = input.value;
                rounding = amount_*1;
                rounded = Math.round(rounding*100)/100;
                output.innerHTML = rounded+" JPY";
                loss.innerHTML = "Exchange cost estimation: "+Math.round(amount_*0.03*100)/100+" JPY";
            }
        }   
    }    
}




document.addEventListener("DOMContentLoaded", ready);