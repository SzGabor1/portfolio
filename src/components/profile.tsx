import '../styles/profile.css';
const IMAGES = {

    image1 : new URL('../assets/Profile.png', import.meta.url).href
}

const Profile = () => {
  return (
    <div className="profile_img">
            <img src={IMAGES.image1} alt='first image'/>
    </div>

  );
};

export default Profile;