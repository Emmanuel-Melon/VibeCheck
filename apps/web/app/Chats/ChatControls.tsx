import { Icon } from "@repo/ui/Icon";
import { useEffect, useState } from "react";
import io from "socket.io-client";

export const ChatControls = () => {
  useEffect(() => {
    // Create a socket connection
    const socket = io();

    // Listen for incoming messages
    socket.on("message", (message) => {
      
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-between p-2 bg-gray-50 gap-4 w-full items-center">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg"
            />
          </div>
        </div>
        <div>
          <h3 className="text-md">Ava Tayloer</h3>
        </div>
      </div>
      <div className="flex gap-2">
        <button title="skip" className="btn btn-sm btn-ghost btn-square">
          <Icon icon="heroicons:phone-arrow-up-right" />
        </button>
      </div>
    </div>
  );
};
