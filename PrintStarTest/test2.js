const SIZE = 5

process.stdout.write('\ntest1 \n');
for(i = SIZE; i >= 1; i--) {
    for(j = i; j <= SIZE + 2; j++) {
        if(j < i * 2 - 1) {
            process.stdout.write('  ');
        }else{
            process.stdout.write(' *');
        }
    }
    process.stdout.write('\n');
}

                

process.stdout.write('\ntest2 \n');
for(i = 1; i <= SIZE; i++) {
    for(j = i; j <= SIZE + 2; j++) {
        if(j < i * 2 - 1) {
            process.stdout.write('  ');
        }else{
            process.stdout.write(' *');
        }
    }
    process.stdout.write('\n');
} 


process.stdout.write('\ntest3 \n');
for(i = SIZE; i >= 1; i--) {
    for(j = i; j <= SIZE + 1; j++) {
        if(j <= i * 2 - 1) {
            process.stdout.write('  ');
        }else{
            process.stdout.write(' *');
        }
    }
    process.stdout.write('\n');
}
for(i = 1; i <= SIZE; i++) {
    for(j = i; j <= SIZE + 2; j++) {
        if(j < i * 2 - 1) {
            process.stdout.write('  ');
        }else{
            process.stdout.write(' *');
        }
    }
    process.stdout.write('\n');
} 
    

