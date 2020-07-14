//arrow functions
    const arr = [1, 3, 4, 5, 6];

    //essa função anônima
    //const newArr = arr.map(function(item){
    //    return item * 2;
    //});

    //const newArr = arr.map((item) => {
    //    return item * 2;
    //});

    //quando há somente um parâmetro, os () ao redor do parâmetro podem ser retirados
    //const newArr = arr.map(item => {
    //    return item * 2;
    //});

    //quando a função não retorna um corpo de função, retorna uma só informação
    const newArr = arr.map(item => item * 2);

    console.log(newArr);

    //criando funções utilizando constantes
        //const teste = function() {
        //    return 'teste';
        //}

        //const teste = () => {
        //    return 'teste';
        //}

        const teste = () => 'teste';

        console.log(teste());

        //criando um objeto (sem os parênteses da erro, pois a função interpreta as chaves como corpo e não objeto)
            const testeObject = () => ({ nome: 'Diego' });

            console.log(testeObject());
