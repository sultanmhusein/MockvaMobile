export const currencyFormat = (num, prefix = "Rp") => {
    prefix = prefix == null ? "" : prefix;
    num = isNaN(num) ? 0 : num;
    const data = num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return prefix + data;
};

export const numberFormatInput = (value) => {
    value = value.replace(/[\D]/g, "");
    value = parseInt(value);
    value = isNaN(value) ? 0 : value;
    value = value.toFixed(0);
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return value;
};

export const emailFormatInput = (value) => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(value)
}

export const removeHtml = (value) => {
    value = value.replace(/(<([^>]+)>)/gi, '',)
    return value
}