import './App.css'

import InputFocus from './components/reference_hooks/index'
import Counter from './components/reference_hooks/counter'

import MemoHook from './components/memo_hook/index1'

const App = ()=>
{
  return(
    <>
      <InputFocus />
      <Counter />

      <MemoHook />
    </>
  )
}

export default App;
