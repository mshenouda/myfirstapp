import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Functional from './components/Functionalcounter';
import Conditional from './components/Conditional';
import Forloops from './components/ForLoops';
import FormClass from './components/FormClass';
import Counter2 from './components/State';
import ArrayState from './components/StateArray';
import Effect from './components/UseEffect';
import EffectIndividual from './components/UseEffectOnly';
import Reducer from './components/UseReducer';
import ReducerComplex from './components/UseReducerComplex';
import UseContext from './components/UseContext';
import CompD from './components/CompD';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header>
        <Hello />
        <Message messagecode='10' messageword='hello'/>
        <Profile first='Mark' last='Samir' />
        <Profile first='Tamer' last='Deif' />
        <Counter />
        <Conditional />
        <Functional value='false' />
        {/* <Forloops />
        <FormClass />
        <Counter2 /> */}
        {/* <ArrayState /> */}
        {/* <Effect /> */}
        {/* <EffectIndividual /> */}
        {/* <Reducer /> */}
        {/* <ReducerComplex /> */}
        {/* <UserContext.Provider value={'Mina'}>
          <ChannelContext.Provider value={'Shenouda'}>
            <CompD />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        
      </header>
    </div>
  );
}

export default App;
