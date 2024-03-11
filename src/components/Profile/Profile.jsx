
const Profile = ({name, image, location, stats: { followers, likes, views } , tag }) => {
    return (
        <div>
  <div>
    <img
      src= {image}
      alt="User avatar"
    />
    <p> {name} </p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers </span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views </span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes </span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
    );
}

export default Profile;