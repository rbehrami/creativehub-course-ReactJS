import './App.css'
import ShopingCard from './Components/ShoppingCard'
import {ProductList} from './Components/ProductList'
import { ExpensesTracker } from './Components/ExpensesTracker'
import {Counter} from './Components/Counter'

function App() {

  return (
    <>
      <ShopingCard />
      <ProductList />
      <ExpensesTracker />
      <Counter />
    </>
  )
}

export default App
