import { Link } from 'react-router-dom'
import './index.css'
import Exercicio1 from '../../components/exercicio1'
import Exercicio2 from '../../components/exercicio2'
import Exercicio3 from '../../components/exercicio3' 
import Exercicio4 from '../../components/exercicio4'
import Exercicio5 from '../../components/exercicio5'

export default function Exercicios() {
    return(
        <div className="page-exercicio">
            <h1 className='Titulo'>Exercícios</h1>
            <div className="exercicios">
                <Link to='/'>Home</Link>
            </div>
            <h1>Exercicio 1</h1>
            <Exercicio1/>
            <br />
            <h1>Exercicio 2</h1>
            <Exercicio2 />
            <br />
            <h1>Exercicio 3</h1>
            <Exercicio3 />
            <br />
            <h1>Exercicio 4</h1>
            <Exercicio4 />
            <br />
            <h1>Exercicio 5</h1>
            <Exercicio5 />
        </div>
    )
}