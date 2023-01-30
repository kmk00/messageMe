import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex flex-col shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `text-gray-600 text-xs`,
  nameReceived: "text-left",
  nameSent: "text-right",
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  const nameClass =
    message.uid === auth.currentUser.uid
      ? `${style.nameSent}`
      : `${style.nameReceived}`;

  return (
    <div>
      <p className={`${style.name} ${nameClass}`}>{message.name}</p>
      <div className={`${style.message} ${messageClass}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
