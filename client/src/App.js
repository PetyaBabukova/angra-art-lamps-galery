import './App.css';
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
// import  LampsGalery  from "./components/LampsGalery/LampsGalery";
import LampsGalaryClassComponent from "./components/LampsGalery/LampsGalaryClassComponent";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Switch>
				<Route path="/" exact component={LampsGalaryClassComponent} />
				<Route path="/categories/:subcategory" component={LampsGalaryClassComponent} />
				{/* <Route path ="/products" component={LampsGalaryClassComponent} /> */}
				<Route path="/products/details/:productId" component={Details} />
			</Switch>

			{/* <Route path ="/" exact component={LampsGalery} />
			<Route path ="/lamps" component={LampsGalery} />
			<Route path ="/lamps/:subcategory" component={LampsGalery} /> */}
			<Footer></Footer>
			{/* <style jsx></style> */}
		</div>
	);
}

export default App;
