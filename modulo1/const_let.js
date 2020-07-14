//const e let
    const a = 1;
    //a = 3; //não pode ter o seu valor reatribuido (reatribuir -> receber um novo valor)

    const usuario = { nome: 'Diego' };
    usuario.nome = 'Cleiton';
    //pode apenas mutar uma variável (mutar -> trabalhar com o mesmo formato, alterando o valor de dentro)

    //variáveis de escopo
        function teste(x) {
            let y = 2;

            if(x > 5) {
                let y = 4;

                console.log(x, y);
            }
        }

        teste(10);
