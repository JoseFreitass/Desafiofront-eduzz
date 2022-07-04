const submitValue = async () =>{

    var headers = new Headers();
    headers.append("Content-Type", "application/json")

    let consulta = document.getElementById('valorProduto').value;
    let lancamento= document.getElementById('lancamento').value;
    let belt = document.querySelector('input[name="belt"]:checked').value;

    const req = {
        "lancamento": lancamento.toString(),
        "belt":belt.toString(),
        "valorProduto":consulta.toString()
    }

    const res = await fetch(
        'http://localhost:3000/auth/calculoprojecao',
        { 
            method: 'POST',
            headers: headers,
            mode: 'cors',
            body: JSON.stringify(req)
        }
    )

    const resJson = await res.json()

    document.getElementById('valorEstimado').innerHTML = resJson.VendaDia.toFixed(2)
    document.getElementById('lancamentoesperado').innerHTML = lancamento
    document.getElementById('projecao').innerHTML = resJson.projecao.toFixed(2)
}