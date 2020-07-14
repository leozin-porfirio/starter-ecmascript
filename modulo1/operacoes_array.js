//operações em array
    const arr = [1, 3, 4, 5, 8, 10];
    
    //map (percorre o vetor e retorna um nova informação)
        const newArr = arr.map(function(item, index) {
            return item + index;
        });

        console.log(newArr);

    //reduce (consome todo o vetor e transforma em uma única informação)
        const sum = arr.reduce(function(total, next) {
            return total + next;
        });

        console.log(sum);

    //filter (percorre o vetor e filtra o que foi atribuído)
        const filter = arr.filter(function(item) {
            return item % 2 === 0;
        });

        console.log(filter);

    //find (verifica se existe alguma informação dentro do array ou se consegue encontrar essa informação)
        const find = arr.find(function(item) {
            return item === 4;
        });

        console.log(find);
