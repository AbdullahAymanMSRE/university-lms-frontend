import "./App.css";
import MyRouter from "./router/index";
import store from "./store";

export default function App() {
  return (
    <div className="min-h-screen">
      <Provider store={store}>
        <MyRouter />
      </Provider>
    </div>
  );
}
