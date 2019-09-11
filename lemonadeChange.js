var lemonadeChange = function (bills) {
    let noFives = 0;
    let noTens = 0;
    let noTwenties = 0;

    for(let i = 0; i < bills.length; i++) {
        let payment = bills[i];
        switch (payment) {
            case 5:
                noFives++;
                break;
            case 10:
                // console.log(noFives >= 1);
                if (noFives > 0) { noFives--; noTens++; }
                else {
                    return false;
                }
                break;
            case 20:
                console.log(noFives >= 1 && noTens >= 1);
                if (noFives >= 1 && noTens >= 1) { noFives--; noTens--; noTwenties++; }
                else if (noFives >= 3) { noFives -= 3; noTwenties++; }
                else return false;
                break;
            default:
                break;
        }
    }
    return true;
};

console.log(lemonadeChange([5,5,5,10,20]));