function toReadable (number) {
    const obj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        18: 'eighteen',
        20: 'twenty',
        30: 'thirty',
        80: 'eighty',
    }

    let copy = number;
    let result = '';

    while (copy !== 0) {
        if (copy / 100 > 1) {
            let a = Math.floor(copy / 100);
            result += obj[a] + ' hundred ';
            copy = copy - a * 100;
            
        }
        else if (copy / 10 > 1){
            if (copy < 20) {
                if (obj[copy]){
                    result += obj[copy];
                } else {
                    result += obj[copy - 10] + 'teen'
                }
                copy = 0;
            }
            else {
                let a = Math.floor(copy / 10);
                if (obj[a * 10]){
                    result += obj[a * 10] + ' ';
                } else {
                    result += obj[a] + 'ty '
                }
                copy = copy - a * 10;
            }
        }
        else {
            result += obj[copy];
            copy = 0;
        }
    }
    return result;
}

console.log(toReadable(18));