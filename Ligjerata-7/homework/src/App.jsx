import './index.css'
import Exercise1 from './exercise-1/Exercise1'
import Stopwatch from './exercise-2/Stopwatch'
import InputText from './exercise-4/TypeText'
import Windowresize from './exercise-5/Windowresize'
import Lastkeypressed from './exercise-6/Lastkeypressed'
import Savetolocal from './exercise-7/Savetolocal'
function App() {


  return (
    <>
    <h2 className='text-center'>========================Exercise One========================</h2>
      <Exercise1 />
    <h2 className='text-center'>========================Exercise Two========================</h2>
      <Stopwatch />
    <h2 className='text-center'>========================Exercise Four========================</h2>
      <InputText />
    <h2 className='text-center'>========================Exercise Five========================</h2>
      <Windowresize />
    <h2 className='text-center'>========================Exercise Six========================</h2>
      <Lastkeypressed />
    <h2 className='text-center'>========================Exercise Seven========================</h2>
      <Savetolocal />
    </>
  )
}

export default App
