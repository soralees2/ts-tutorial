import React from 'react';
import { Counter, Profiles } from './components/index';
// import Greetings from './Greetings';

/* const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Hello" onClick={onClick} />;
  return <Greetings name="Hello" onClick={onClick} />;
}; */

class App extends React.Component {
  render() {
    return (
      <div>
        <Profiles name="소라짱" job="프엔개발자" />
        <Counter />
      </div>
    );
  }
}
export default App;
