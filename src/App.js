import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import FinderContainer from './components/Finder/FinderContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'

const App = (props) => {

  return (
    <div className='app__wrapper'>
      <HeaderContainer />
      <Navigation />
      <div className='app__content'>

        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/finder' render={() => <FinderContainer />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />

      </div>
      <Background />
    </div>
  );
}


export default App;