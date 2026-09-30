import { Link } from "react-router";

export default function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>{" | "}
            <Link to="/produtos">Produtos</Link>{" | "}
            <Link to="/cadastro">Cadastro de Produto</Link> {" | "}
        </nav>
    );
}