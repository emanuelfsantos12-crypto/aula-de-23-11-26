async function dados(){
    const api = await fetch("https://jsonplaceholder.typicode.com/user")
    console.log(await api.json());
}



await dados();