import React from 'react';
import ProductList from "./pages/ProductList.jsx";
import Loader from "./components/loader/Loader.jsx";

const App = () => {
    return (
        <div>
            <ProductList />
            <Loader />
        </div>
    );
};

export default App;