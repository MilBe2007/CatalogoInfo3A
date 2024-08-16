// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.



// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.
 
// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";

export default function Home() {
    const [listaProdutos, setProdutos] = useState([
        { id:1, nome:'Carrinho', preco:'R$ 350,00'},
        { id:2, nome:'Banheira', preco:'R$ 132,00'},
        { id:3, nome:'Berço', preco:'R$ 549,00'}
    ]);
    
    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto])
    }

    const removerPedido = (id) => {
        let remover = false;
        let listaAux = listaPedidos.filter((produto) =>
        {
            if (remover == false) {
                if (produto.id !== id) {
                } else {
                    remover = true;
                    return null
                } 
            } else {
                return produto
            }
            });
            setListaPedidos(listaAux);
    }

    return (
      <div>
           <h1>Produtos para Bebês</h1>
  
           {
            listaProdutos.map((produto) =>
              <div key={produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
              </div>
            )
           }
           {
            listaPedidos.map((produto)=>
            <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            </div>
            )
           }
      </div>
     
    );
  }