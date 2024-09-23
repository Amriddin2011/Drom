import { USD_RATE } from "../store"

async function getExchangeRates() {
    let conversion_rates = {}
    return conversion_rates
}

function zeroes(price, exchangeRates = null) {
    let usd = 0
    if (exchangeRates) {
        usd = parseInt(exchangeRates.UZS * price)
    } else {
        usd = parseInt(USD_RATE * price)
    }
    // 7822785    -->>   7 822 785
    let formatted_sum = ''
    String(usd).split("").reverse().forEach((char, index) => {
        if (index % 3 == 0) {
            formatted_sum += " " + char
        } else {
            formatted_sum += char
        }
    })
    return formatted_sum.split("").reverse().join("")
}


function getTokensFromLocalStorage() {
    const TOKEN = localStorage.getItem("auth-token") || "{}"
    const accessToken = JSON.parse(TOKEN).access
    const refreshToken = JSON.parse(TOKEN).refresh
    return { accessToken, refreshToken }
}


export { zeroes, getExchangeRates, getTokensFromLocalStorage }