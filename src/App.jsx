import "./App.css";
import MyRouter from "./router/index";
import { Provider } from "react-redux";
import store from "./api/store";

export default function App() {
	return (
		<div className="min-h-screen">
			<Provider store={store}>
				<MyRouter />
			</Provider>
		</div>
	);
}
