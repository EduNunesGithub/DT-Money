export const valueToCurrency = (value: number) => {
    const valueString = value.toLocaleString("pt-BR", {
        currency: "BRL",
        currencyDisplay: "symbol",
        style: "currency"
    });

    if (value < 0) return "- " + valueString.substring(1);

    return valueString;
}

export const valueToCurrencyNoSymbol = (value: number) => {
    const valueString = value.toLocaleString("pt-BR", {
        currency: "BRL",
        currencyDisplay: "code",
        style: "currency"
    });

    return valueString.substring(4);
}