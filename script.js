const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas

    const dolarToday = 5.05
    const euroToday = 5.43
    const libraToday = 6.34

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if(currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
             style: "currency",
             currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
             style: "currency",
             currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
    } 

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-UK",{
             style: "currency",
             currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
    } 

}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")


    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src ="./DOLAR.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src ="./EURO.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./libra1.png"
    }
    


}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)
