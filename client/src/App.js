import './App.css';
import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import DemoComponent from "./components/DemoComponent/DemoComponent";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/demo" component={DemoComponent} />

			</Switch>

		</div>
	);
}

export default App;
