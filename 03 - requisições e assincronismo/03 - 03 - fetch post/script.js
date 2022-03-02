async function inserirPost() {
    document.getElementById('posts').innerHTML = 'Caregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'titulo de teste',
            body: 'corpo de teste',
            userId: 6
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}