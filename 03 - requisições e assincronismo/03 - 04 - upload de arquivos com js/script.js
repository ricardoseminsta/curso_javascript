async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0];
    console.log(arquivo);

    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/uploads', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multpart/form-data'
        }
    });
}