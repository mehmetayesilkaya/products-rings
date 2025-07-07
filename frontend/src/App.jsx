import {useEffect, useState} from 'react';
import ProductCarousel from './ProductCarousel';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(setProducts)
            .catch(console.error);
    }, []);

    return (
        <div style={{maxWidth: 1400, margin: '0 auto', padding: 40, background: '#fff'}}>
            <h1
                style={{
                    fontFamily: 'Avenir, sans-serif',
                    fontWeight: 400,
                    fontSize: 45,
                    textAlign: 'center',
                    marginBottom: 100,
                    color: '#000'
                }}
            >
                Product List
            </h1>
            <ProductCarousel products={products}/>
        </div>
    );
}

export default App;


