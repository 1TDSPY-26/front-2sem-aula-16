import { useState } from "react";
import type { TipoProduto } from "../../types/types";

export default function CadProduto() {
  const [produto, setProduto] = useState<TipoProduto>({
    id: "",
    nome: "",
    preco: 0,
    estoque: 0,
  });

  return (
    <main>
      <h2>Cadastro de Produto</h2>
      <div>
        <form>
          <fieldset>
            <legend>Dados do Produto</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={produto.nome}
                onChange={(e) =>
                  setProduto({ ...produto, nome: e.target.value })
                }
              />
              <div>
                <label htmlFor="preco">Preço:</label>
                <input
                  type="number"
                  id="preco"
                  name="preco"
                  value={produto.preco}
                  onChange={(e) =>
                    setProduto({
                      ...produto,
                      preco: parseFloat(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="estoque">Estoque:</label>
                <input
                  type="number"
                  id="estoque"
                  name="estoque"
                  value={produto.estoque}
                  onChange={(e) =>
                    setProduto({
                      ...produto,
                      estoque: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div>
                <button type="button">Cadastrar Produto</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
