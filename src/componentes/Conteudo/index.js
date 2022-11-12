import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import SecaoContato from "../SessaoContatos";
import SecaoSobre from "../SecaoSobre";

export default function Conteudo(){

    return(
        <main>
            <SecaoCapa/>
            <SecaoProdutos/>
            <SecaoContato/>
            <SecaoSobre/>
        </main>
    )
}