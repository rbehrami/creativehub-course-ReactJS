import { useEffect, useState, useReducer } from 'react';
import { fetchProducts } from '../APIs/Api';

const initialState = {
  products: [],        // all items from API
  filtered: [],        // filtered items to display
  category: 'all',
  maxPrice: Infinity,
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filtered: action.payload,
      };

    case 'FILTER_CATEGORY':
      return {
        ...state,
        category: action.payload,
        filtered: state.products.filter(p =>
          (action.payload === 'all' || p.category === action.payload) &&
          p.price <= state.maxPrice
        ),
      };

    case 'FILTER_PRICE':
      return {
        ...state,
        maxPrice: action.payload,
        filtered: state.products.filter(p =>
          (state.category === 'all' || p.category === state.category) &&
          p.price <= action.payload
        ),
      };

    default:
      return state;
  }
}


export function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_PRODUCTS', payload: data }));
  }, []);


  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) return <p className="text-red-600">{error}</p>;
  if (products.length === 0) return <p>Loading products...</p>;

return (
  <>
    <section className='container mx-auto'>
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Store Products</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={state.category}
          onChange={e => dispatch({ type: 'FILTER_CATEGORY', payload: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        <input
          type="number"
          placeholder="Max price"
          value={state.maxPrice === Infinity ? '' : state.maxPrice}
          onChange={e => {
            const val = e.target.value;
            dispatch({ type: 'FILTER_PRICE', payload: val === '' ? Infinity : parseFloat(val) });
          }}
          className="p-2 border rounded w-24"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {state.filtered.map(p => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.image} alt={p.title} className="h-32 mx-auto object-contain mb-2" />
            <h2 className="font-semibold text-sm">{p.title}</h2>
            <p className="text-gray-800 font-bold">€{p.price}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  </>
    
  );
}
