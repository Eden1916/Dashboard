const Profile = () => {
    return (
      <div className="bg-white p-6 rounded shadow max-w-md">
        <h2 className="font-bold mb-4">Profile Settings</h2>
        <form className="space-y-4">
          <input className="w-full border p-2 rounded" placeholder="Name" />
          <input className="w-full border p-2 rounded" placeholder="Email" />
          <input
            className="w-full border p-2 rounded"
            placeholder="Password"
            type="password"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
        </form>
      </div>
    );
  };
  
  export default Profile;
  