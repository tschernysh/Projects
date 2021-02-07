import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.app__content}>
      

      <ProfileInfo />
      <MyPostsContainer />

    </div>
  )
};

export default Profile;