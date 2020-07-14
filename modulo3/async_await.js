const minhaPromise = () => new Promise ((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

/*minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {

    });*/

//sem async/await
    /*minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);

            minhaPromise().then(response => {
                console.log(response);
            })
        })
    })*/

//com async/await
    /*async function executaPromise() {
        console.log(await minhaPromise());
        console.log(await minhaPromise());
        console.log(await minhaPromise());
    };

    executaPromise();*/

//usando arrow function
    const executaPromise = async () => {
        console.log(await minhaPromise());
        console.log(await minhaPromise());
        console.log(await minhaPromise());
    };

    executaPromise();
