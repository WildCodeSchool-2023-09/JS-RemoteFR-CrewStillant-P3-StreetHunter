import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function MessagingPage() {
  const messages = useLoaderData();
  // const [messageId, setMessageId] = useState();

  // useEffect(() => {

  // }, [messageId])

  return (
    <div className="h-[80vh] overflow-auto flex flex-col gap-5 mt-10 ">
      {messages.map((m) => (
        <button
          type="button"
          // onClick={() => setMessageId(m.id)}
          key={m.id}
          className="flex flex-col text-start "
        >
          <div className="font-extrabold"> {m.username} </div>
          <div className=""> {m.title} </div>
        </button>
      ))}
    </div>
  );
}
