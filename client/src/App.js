import './App.css';
import { Route, Switch } from "react-router-dom";

import  Header  from "./components/Header/Header";
import  Footer  from "./components/Footer/Footer";
import  LampsGalery  from "./components/LampsGalery/LampsGalery";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Route path ="/" component={LampsGalery} />
			<Footer></Footer>
			{/* <style jsx></style> */}
		</div>
	);
}

export default App;
