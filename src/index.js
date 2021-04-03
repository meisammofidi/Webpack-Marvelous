import React from 'react';
import ReactDOM from 'react-dom';
import Img from './images/parsilogo.jpg';
import './styles.scss';

const App = () => {
  /**
 * 
 let endpointUrl;
 switch (process.env.NODE_ENV) {
    case 'production':
      endpointUrl = 'www.production.epicgame.com/v1';
      break;
      case 'qa':
      endpointUrl = 'www.qa.epicgame.com/v1';
      break;
    default:
      endpointUrl = 'www.development.epicgame.com/v1';
      break;
    }
 */
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>Hello ReactJS!!</h1>
      <p>Sass css! {env}</p>
      <img src={Img} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
