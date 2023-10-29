function add7(number) {
    return number + 7;
}

function multiply(a , b) {
    return a * b
}

function capitalize(string) {
    let length = string.length;
    first_char = string[0]
    first_char = first_char.toUpperCase()
    rest_of_word = string.slice(1, length)
    rest_of_word = rest_of_word.toLowerCase()
    output_str = `{first_char}+{rest_of_word}`
    return output_str;
}

function lastLetter(string) {
    let length = string.length
    char = string[(length-1)]
    return char
}