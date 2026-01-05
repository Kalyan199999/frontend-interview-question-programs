import './App.css'

import InputFocus from './components/reference_hooks/index'
import Counter from './components/reference_hooks/counter'

import MemoHook from './components/memo_hook/index1'

import CallBacks from './components/callbacks/index'

import Wrap from './components/context/wrap-context'

import Window1 from './components/window_functions/window1'

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
    </>
  )
}

export default App;
