import './App.css'

import InputFocus from './components/reference_hooks/index'
import Counter from './components/reference_hooks/counter'

import MemoHook from './components/memo_hook/index1'

import CallBacks from './components/callbacks/index'

import Wrap from './components/context/wrap-context'

import Window1 from './components/window_functions/window1'

import Reducer from './components/reducer_hook/reducer'
import CartReducer from './components/reducer_hook/cart'

import ImperativeUsage from './components/imperativeHandle_hook/parent'

import IdUsage from './components/idUsage/id-use'

import MathematicalTable from './components/useTranscation_hook/table'

import FetchData from './components/useTranscation_hook/fetching-data'

const App = ()=>
{
  return(
    <>
      <InputFocus />
      <Counter />

      <MemoHook />

      <CallBacks />

      <Wrap />

      <Window1 />

      <Reducer />
      <CartReducer />

      <ImperativeUsage />

      <IdUsage />

      {/* <MathematicalTable /> */}
      <FetchData />
    </>
  )
}

export default App;
