import { FaUserCircle } from "react-icons/fa";

const IndividualChat = ({ name, message }) => {
  return (
    <div className="flex shadow-sm p-1 items-center m-1">
      <FaUserCircle className="text-xl" />
      <span className="font-bold px-2 text-sm">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default IndividualChat;
