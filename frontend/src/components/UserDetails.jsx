import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { username } = useParams();

  const [user, setUser] = useState({});
  const [websiteURL, setWebsiteUrl] = useState("");
  const [instaURL, setInstaURL] = useState("");

  useEffect(() => {
    axios
      .get(`https://spoxtale-task.vercel.app/${username}`)
      .then((res) => {
        console.log(res.data.urls[0]);
        setUser(res.data);
        setInstaURL(res.data.urls[1]);
        setWebsiteUrl(res.data.urls[0]);
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }, [username]);

  return (
    <div className="flex items-center w-full justify-center min-h-screen rounded">
      <div className="w-full sm:w-1/4 bg-[#FAF1E4] h-screen flex items-center justify-center flex-col">
        <div className="w-[40%] h-1/5 h-12 rounded-full mt-1">
          <img
            src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile photo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="rounded-md w-2/4 bg-green-400 h-[27vh] mt-8">
          <a target="_blank" rel="noopener noreferrer" href={websiteURL}>
            <img
              src={user.websiteQRCode}
              alt="profile photo"
              className="h-full w-full rounded-md object-cover"
            />
          <h6 className="font-semibold text-center">Website</h6>
          </a>
        </div>
        <div className="rounded-md w-2/4 bg-green-400 h-[27vh] mt-12">
          <a target="_blank" rel="noopener noreferrer" href={instaURL}>
            <img
              src={user.socialMediaQRCode}
              alt="profile photo"
              className="h-full w-full rounded-md object-cover"
            />
          <h6 className="font-semibold text-center">Instagram</h6>
          </a>
        </div>
        <button
          type="button"
          className="mt-12 w-[90%] rounded-xl bg-[#F7E987] px-2.5 py-1 text-[1.5rem] font-semibold text-black h-12 text-center mx-4"
        >
          Fill the Form
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
