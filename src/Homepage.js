
import { Link } from 'react-router-dom';

function Homepage() {


    return (
        <div>
            <h1>HomePage</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="exercicio1">Exercício 1</Link>
                    </li>
                    <li>
                        <Link to="exercicio2">Exercício 2</Link>
                    </li>
                    <li>
                        <Link to="exercicio3">Exercício 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Homepage;