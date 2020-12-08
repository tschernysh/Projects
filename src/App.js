import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Navigation />
        <div className='app__content'>
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <Background />
      </div>
    </BrowserRouter>
  );
}


export default App;