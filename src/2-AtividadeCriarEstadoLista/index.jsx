// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        { id:img1, nome:'Carrinho', preco:'R$ 350,00'},
        { id:img2, nome:'Banheira', preco:'R$ 132,00'},
        { id:img3, nome:'Berço', preco:'R$ 549,00'}
    ]);

    return (
        <div>
            <h1>Livros de Programação</h1>
            <img1 src="https://imgs.casasbahia.com.br/1563674098/1xg.jpg"></img1>
            <img2 src="https://s.zst.com.br/cms-assets/2020/11/banheira-de-bebe-2-.png"></img2>
            <img3 src="https://acdn.mitiendanube.com/stores/001/707/787/products/berco-mimo-ambiente-fendi-nature1-2fafbf64d8edc8987116805340619791-1024-1024.jpg"></img3>

        </div>

    );
}

