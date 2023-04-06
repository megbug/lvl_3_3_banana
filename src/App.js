import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState();

	const handleNumber = (event) => {
		setNumber(Number(event.target.value))
	}

	const add = () => {
		setCount(count + number);
	}

	const sub = () => {
		setCount(count - number);
	}

	return (
		<div className="App">
			<body>
				<h1 id='title'>Banana Bank</h1>
				<div className='konto'>
					<h2>Dein Girokonto</h2>
					<p className='saldo'>{count}</p>
					<input className='geldbetrag' type="number" name="" id="" onChange={handleNumber} placeholder='Höhe Betrag' />
					<button className='einzahlen' onClick={add}>Einzahlen</button>
					<button className='auszahlen' onClick={sub}>Auszahlen</button>
				</div>
			</body>
		</div>
	);
}

export default App;




