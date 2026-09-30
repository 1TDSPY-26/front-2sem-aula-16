import { useState } from "react";
import type { TipoProduto } from "../../types/types";

export default function CadProduto() {

    const[produto,setProduto] = useState<TipoProduto>({id:"",nome:"",preco:0,estoque:0});

    

    return (
        <main>
            <h2>Cadastro de Produtos</h2>
            <div>
                <form>
                    <fieldset>
                        <legend>Dados do Produto</legend>
                        <div>
                            <label htmlFor="nome">Nome do Produto</label>
                            <input type="text" name="nome" id="nome" value={produto.nome} onChange={(e)=> setProduto({...produto,nome:e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="preco">Preço do Produto</label>
                            <input type="number" step={0.1} name="preco" id="preco" value={produto.preco} onChange={(e) => setProduto({ ...produto, preco: parseFloat(e.target.value) })} />
                        </div>
                        <div>
                            <label htmlFor="estoque">Estoque do Produto</label>
                            <input type="number" step={1} name="estoque" id="estoque" value={produto.estoque} onChange={(e) => setProduto({ ...produto, estoque: parseInt(e.target.value) })} />
                        </div>
                        <div>
                            <button type="button">CADASTRAR</button>
                        </div>

                    </fieldset>
                </form>
            </div>
        </main>
    );

}