import './App.css';
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";
// import  LampsGalery  from "./components/LampsGalery/LampsGalery";
import SubcategoriesComponent from "./components/SubcategoriesComponent/SubcategoriesComponent";
import GaleryNew from './components/GaleryNew/GaleryNew';
import CategoriesCardComponent from './components/CategoriesCardComponent/CategoriesCardComponent';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Switch>
				{/* <Route path="/" exact component={LampsGalaryClassComponent} /> */}
				<Route path="/" exact component={GaleryNew} />
				<Route path="/products/:subcategory" component={SubcategoriesComponent} />
				{/* <Route path ="/products" component={LampsGalaryClassComponent} /> */}
				<Route path="/products/details/:productId" exact component={Details} />
				<Route path="/products/details/:productId/edit" component={EditProduct} />
				<Route path="/tanyacreate" component={CreateProduct}/>
				<Route path="/contacts" component={Contacts} />
				<Route path="/about-us" component={AboutUs} />
				{/* <Route path="/galery" component = {CategoriesCardComponent} /> */}
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
