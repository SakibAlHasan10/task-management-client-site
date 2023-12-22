const Profile = () => {
  return (
    <div className="w-full flex justify-between items-start h-full">
      <div className="border border-green-300 w-full h-full">
        <h4>To-Do</h4>
      </div>
      <div className="border border-green-300 w-full h-full">
        <h4>Ongoing</h4>
      </div>
      <div className="border border-green-300 w-full h-full">
        <h4>Completed</h4>
      </div>
    </div>
  );
};

export default Profile;
