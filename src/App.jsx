import FriendList from "./components/FriendList/FriendList.jsx";
import Profile from "./components/Profile/Profile.jsx";
// import FriendList from "./components/FriendList/FriendList.jsx";

import userData from "./userData.json";
import friends from "./friends.json";




//APP code below


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

<FriendList friends={friends} 
/>

    </>
  );
};

export default App;
