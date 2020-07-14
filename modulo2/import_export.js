//import/export
    //importando de um arquivo com várias funcionalidades
        //import { soma, sub } from './export_funcoes';
        //import { soma as somaFunction, sub } from './export_funcoes'; //caso queira mudar o noma da função
        //import soma, { sub } from './export_funcoes'; //utilizando (export default) em uma das fuções
        
        //console.log(soma(1, 2));
        //console.log(somaFunction(1, 2));
        //console.log(sub(4, 2));

    //importando de um arquivo com apenas uma funcionalidade utilizando (export default)
        import soma from './export_soma';
        import somaFunction from './export_soma'; //caso queira mudar o noma da função

        console.log(soma(1, 2));
        console.log(somaFunction(1, 2));

    //importando todas as funções de uma só vez
        import * as funcoes from './export_funcoes';

        console.log(funcoes); //importando como funções

        console.log(funcoes.soma(1, 2)); //importando o resultado das funções
        console.log(funcoes.sub(4, 2)); //importando o resultado das funções
        console.log(funcoes.mult(2, 5)); //importando o resultado das funções
