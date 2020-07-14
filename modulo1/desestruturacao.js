//desestruturação
    const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC'
        },
    };

    //sem desestruturação
        //const nome = usuario.nome;
        //const idade = usuario.idade;
        //const cidade = usuario.endereco.cidade;

    //com desestruturação
        const { nome, idade, endereco: { cidade } } = usuario;

    console.log(nome);
    console.log(idade);
    console.log(cidade);

    //para parâmetros de funções
        //sem desestruturação
            //function mostraNome(usuario) {
            //    console.log(usuario.nome);
            //    console.log(usuario.idade);
            //    console.log(usuario.endereco.cidade);
            //}

            //mostraNome(usuario);

        //com desestruturação  
            function mostraNome({ nome, idade, endereco: { cidade } }){
                console.log(nome, idade, cidade);
            };

            mostraNome(usuario);
