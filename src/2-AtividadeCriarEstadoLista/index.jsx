// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        { id:1, nome:'Carrinho', preco:'R$ 350,00'},
        { id:2, nome:'Banheira', preco:'R$ 132,00'},
        { id:3, nome:'Berço', preco:'R$ 549,00'}
    ]);

    return (
        <div>
            <h1>Produtos para bebês</h1>

        </div>

    );
}

