//operadores rest/spread
    //rest (pega o resto das propriedade)
        const usuario = {
            nome: 'Diego',
            idade: 23,
            empresa: 'Rocketseat'
        };

        const { nome, ...resto } = usuario;

        console.log(nome);
        console.log(resto);

    //em vetores
        const arr = [1, 2, 3, 4];

        const [ a, b, ...c ] = arr;

        console.log(a);
        console.log(b);
        console.log(c);

    //em parâmetros de funções
        //function soma(a, b) {
        //    return a + b;
        //};

    //com rest
        //function soma(...params) {
        //    return params;
        //};

        function soma(...params) {
            return params.reduce((total, index) => total + index);
        };

        console.log(soma(1, 3));

    //spread (rapassa as informações de algum objeto ou de um array para outra estrutura de dados)
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];

        const arr3 = [ ...arr1, ...arr2 ]; //[ 1, 2, 3, 4, 5, 6 ]

        console.log(arr3);

        //criando um novo obejto de usuário com as mesmas propriedades que o primeiro objeto, trocando uma propriedade
            const usuario1 = {
                nome: 'Diego',
                idade: 23,
                empresa: 'Rocketseat',
            };

            const usuario2 = { ...usuario1, nome: 'Gabriel' };

            console.log(usuario2);
