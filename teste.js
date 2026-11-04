let num = 0;

let sum = 0;



do {

    num += 1;

    if (num % 2 === 0) {

        continue;

    }

    sum += num;

} while (num < 10);



console.log(sum);