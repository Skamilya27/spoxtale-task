import { Link } from "react-router-dom";

const UserCard = ({ data }) => {
  return (
    <>
      <div className="w-[300px] rounded-md border bg-[#FAF1E4]">
        <img
          src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile image"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold capitalize">{data.name}</h1>
          <p className="mt-3 text-sm text-gray-600">{data.emailID}</p>
          <Link to={`/${data.emailID.split("@")[0].replace(".", "")}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-[#F7E987] px-2.5 py-1 text-[10px] font-semibold text-black shadow-sm hover:bg-[#F7E987]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Click Me
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserCard;
