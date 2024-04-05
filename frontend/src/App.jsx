import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux"; 
import { store } from "./Redux/store"; 

import { Navbar } from "./Components/Navbar";

import Allroutes from "./Routing/AllRoutes";
import Footer from "./Components/footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Allroutes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
