import {useState} from 'react';


function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const operate = ['/', '*', '+', '-', '.'];

	const updateCalc = value =>{
		if (
			operate.includes(value) && calc === '' ||
			operate.includes(value) && operate.includes(calc.slice(-1))
		){
			return;
		}
		setCalc(calc + value);

		if(!operate.includes(value)){
			setResult(eval(calc + value).toString());
		}
	}

	//displaying number buttons
	const displayNum = () =>{
		const num = [];
		for (let i=1; i<10; i++){
			num.push(
				<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
			)
		}
		return num;
	}

	const equalSign = () => {
		setCalc(eval(calc).toString());
		const value = calc.slice(0, -100);
		setResult(value);	

	}

	const delSign = () => {
		if (calc === '') {
			return;
		}

		const value = calc.slice(0, -1);
		setCalc(value)
	}

	const clearAll = () => {
		const value = calc.slice(0, -100);
		setCalc(value);
		setResult(value);
	}

  return (
	<div className="Description">
		<h1>Basic Calculator</h1>
	<div className="App">
	  <div className="Calculator">
		<div  className="Display">
			{calc || ""}<br></br>
			<span>({result})</span>			
		</div>

		<div className="Operators">
			<button onClick={() => updateCalc('/')}>/</button>
			<button onClick={() => updateCalc('*')}>*</button>
			<button onClick={() => updateCalc('-')}>-</button>
			<button onClick={() => updateCalc('+')}>+</button>

			<button onClick={delSign}>DEL</button>
		</div>

		<div className="Digits">
			{ displayNum() }
			<button onClick={() => updateCalc('0')}>0</button>
			<button onClick={() => updateCalc('.')}>.</button>

			<button onClick={equalSign}>=</button>
		</div>

		<div className="Clear">
			<button onClick={clearAll}>AC</button>
		</div>


	  </div>
	</div>
		<h2>Developed by: ShaccDarcc</h2>
	</div>
  );
}

export default App;
