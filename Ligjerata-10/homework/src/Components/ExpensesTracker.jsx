import React, { useReducer, useState, useMemo } from 'react';

const initialState = {
  transactions: [],
};


function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { transactions: [...state.transactions, action.payload] };
    case 'DELETE':
      return {
        transactions: state.transactions.filter(t => t.id !== action.payload),
      };
    default:
      return state;
  }
}

export function ExpensesTracker() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState({
    description: '',
    date: '',
    price: '',
  });


const totalPrice = useMemo(
  () => state.transactions.reduce((sum, t) => sum + t.price, 0),
  [state.transactions]
);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.date || !form.price) return;

    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now(),
        description: form.description,
        date: new Date(form.date),
        price: parseFloat(form.price),
      },
    });

    setForm({ description: '', date: '', price: '' });
  };

  return (
    <section className="container mx-auto bg-gray-200 min-h-screen py-8">
      <h1 className="text-blue-400 font-bold text-2xl text-center">Daily Expenses</h1>

      <form onSubmit={handleSubmit} className="flex justify-center gap-5 py-5 mt-5">
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border rounded py-2 w-[200px]"
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border rounded py-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border rounded py-2 w-[100px]"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </form>

      <div className="border rounded mx-auto mt-5 py-10 px-5 w-[500px]">
        <div className="flex items-center gap-5">
          <h4 className="font-bold text-2xl">Total Expenses:</h4>
          <p className="text-red-400 text-4xl">&#8364;{totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {state.transactions.map(transc => (
        <div key={transc.id}
          className="flex mx-auto justify-between items-center gap-10 px-5 py-1 bg-gray-100 border rounded w-[500px] mt-2"
        >
          <div>
            <h2 className="font-bold text-lg">Description</h2>
            <p>{transc.description}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Date</h2>
            <p>{transc.date.toLocaleDateString()}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Price</h2>
            <p>€{transc.price}</p>
          </div>
          <button
            onClick={() => dispatch({ type: 'DELETE', payload: transc.id })}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}
