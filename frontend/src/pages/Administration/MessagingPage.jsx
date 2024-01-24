import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function MessagingPage() {
  const messages = useLoaderData();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="h-[80vh] w-[50] overflow-auto mt-10 flex flex-col justify-center">
      {messages.map((m) => (
        <div className="w-[50rem] overflow-auto text-center">
          <button
            className="bg-backgroundTwo bg-opacity-60"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {m.title}
          </button>
          {isVisible && <p>{m.body}</p>}
        </div>
      ))}
    </div>
  );
}
