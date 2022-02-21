console.log('구구단');
console.log(' ');
for(i = 1; i <= 7; i+=3) {
    for(j = 1; j <=9; j++){
        console.log(`${i} * ${j} = ${i * j} \t${i + 1} * ${j} = ${i * j} \t${i + 2} * ${j} = ${i * j}`);
    }
    console.log('')
}
