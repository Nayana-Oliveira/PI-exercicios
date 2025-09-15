import { Link } from 'react-router-dom'
import './index.css'

export default function Erro() {
    return(
        <div className="erro-container">
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <div className="erro-buttons">
                <Link to='./home'>Voltar para a home</Link>
            </div>
        </div>
    )
}