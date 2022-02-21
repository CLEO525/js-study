const SIZE = 3

process.stdout.write('test1 \n');
for(i = 0; i < SIZE; i++) {
    for(j = 0; j <= i; j++) {
        process.stdout.write(' *');
    }
    process.stdout.write('\n');
}

process.stdout.write('\ntest2 \n');
for(i = SIZE; i > 0; i--) {
    for(j = 0; j <i; j++) {
        process.stdout.write(' *');
    }   
process.stdout.write('\n');
}

process.stdout.write('\ntest3 \n');
for(i = SIZE; i > 0; i--) {
    for(j = 0; j <= SIZE; j++) {
        if(j < i) {
            process.stdout.write('  ');
        } else {
            process.stdout.write(' *');
        }
    }
    process.stdout.write('\n');
}

process.stdout.write('\ntest4 \n');
for(i = 1; i <= SIZE; i++) {
    for(j = 1; j <= SIZE; j++) {
        if(j >= i) {
            process.stdout.write(' *');
        } else {
            process.stdout.write('  ');
        }
    }
    process.stdout.write('\n');
}

