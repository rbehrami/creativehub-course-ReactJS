import { useReducer } from "react";

const products = [
  {
    id: 1,
    productName: 'Stylish Golden Watch',
    Color: "yellow",
    price: 120,
    quantity: 0,

    image: 'https://readymadeui.com/images/watch1.webp',
  },
  {
    id: 2,
    productName: 'Stylish Smart Watch',
    Color: "red",
    price: 60,
    quantity: 0,

    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
  },
  {
    id: 3,
    productName: 'Round Glass',
    Color: "gray",
    price: 20,
    quantity: 0,

    image: 'https://readymadeui.com/images/sunglass6.webp',
  }

];

const initialState = {
  products,
  ...calculateTotals(products),
};

function calculateTotals(products) {
  const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = products.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shipping = totalPrice * 0.05;
  const vat = totalPrice * 0.18;
  const totalSum = totalPrice + shipping + vat;

  return {
    totalQuantity,
    totalPrice,
    shipping,
    vat,
    totalSum,
  };
}



function reducer(state, action) {
  let updatedProducts;

  switch (action.type) {
    case 'increment':
      updatedProducts = state.products.map(product =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return {
        ...state,
        products: updatedProducts,
        ...calculateTotals(updatedProducts),
      };

     case 'decrement':
      updatedProducts = state.products.map(product =>
        product.id === action.payload && product.quantity >=0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return {
        ...state,
        products: updatedProducts,
        ...calculateTotals(updatedProducts),
      };
    case 'delete':
      updatedProducts = state.products.filter(product => product.id !== action.payload);
      return {
        ...state,
        products: updatedProducts,
        ...calculateTotals(updatedProducts),
      };
    default:
      throw new Error();
  }
}



function MyApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <section>
        <div className="container mx-auto flex flex-rowgap-4 bg-white px-4 py-6 mt-10 rounded-md shadow-sm border border-gray-200">
          <div className="mx-auto w-[600px] space-y-4">
            {state.products.map((product) => (
              <div key={product.id} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
                <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                  <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                    <img src={product.image} alt={product.productName} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">{product.productName}</h3>
                      <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">
                        Color: <span className="inline-block w-4 h-4 rounded-sm" style={{ backgroundColor: product.Color }}></span>
                      </p>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-sm font-semibold text-slate-900">Price :&#8364;{product.price}.00</h3>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex flex-col">
                  <div className="flex items-start gap-4 justify-end">
                    <button
                      onClick={() => dispatch({ type: 'delete', payload: product.id })}
                      className="bg-red-400 text-white px-2 py-1 rounded font-bold cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'decrement', payload: product.id })}
                      className="flex items-center justify-center w-[24px] h-[24px] cursor-pointer bg-slate-400 text-white text-xl rounded-full"
                    >
                      −
                    </button>
                    <span className="font-semibold text-base">{product.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: 'increment', payload: product.id })}
                      className="flex items-center justify-center w-[24px] h-[24px] cursor-pointer bg-slate-800 text-white text-xl rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[400px] bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
            <ul className="text-slate-500 font-medium space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">Quantity <span className="ml-auto font-semibold text-slate-900">{state.totalQuantity}</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold text-slate-900">&#8364;{state.totalPrice}</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">&#8364;{state.shipping.toFixed(2)}</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-semibold text-slate-900">&#8364;{state.vat.toFixed(2)}</span></li>
                <hr className="border-slate-300" />
                <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">Total <span className="ml-auto">&#8364;{state.totalSum.toFixed(2)}</span></li>
            </ul>
            <div className="mt-8 space-y-4">
                <button type="button" className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md cursor-pointer">Buy Now</button>
            </div>       
          </div>
        </div>
      </section>
    </>
  );
}

export default MyApp;
