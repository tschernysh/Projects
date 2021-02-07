import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom'

const App = (props) => {

  return (
    <div className='app__wrapper'>
      <Header />
      <Navigation />
      <div className='app__content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
      <Background />
    </div>
  );
}


export default App;