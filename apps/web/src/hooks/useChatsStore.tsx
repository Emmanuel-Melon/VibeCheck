import { create } from 'zustand';

const chats = [
    {
      id: 1,
      user: {
        name: "Ava Taylor",
        id: 1
      },
      messages: [
        {
            id: 1,
            text: "You were the Chosen One!",
            sender: {
                name: "Ava Taylor",
                id: 1,
                avatar: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        },
        {
            id: 2,
            text: "Hello, there!", 
            sender: {
                name: "Eman",
                id: 2,
                avatar: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "Sophia Williams",
      },
      messages: [
        {
            id: 1,
            text: "Hello, there!"
        }
      ]
    },
    {
      id: 3,
      user: {
        name: "Olivia Brown",
      },
      messages: [
        {
            id: 1,
            text: "Hello, there!"
        }
      ]
    },
  ];

type Message = {
  id: string;
  text: string;
  sender: string;
  // add other message properties here
};

type Chat = {
  id: string;
  name: string;
  messages: Message[];
  // add other chat properties here
};

type Store = {
  chat: Chat[];
  currentChatIndex: number;
  currentChat: Chat | null;
  goToNextChat: () => void;
  goToPreviousChat: () => void;
  addMessageToChat: (message: Message) => void;
};

export const useChatsStore = create<Store>((set) => ({
  chat: [], // initialize with an empty array or fetch from API
  currentChatIndex: 0, // start from the first chat
  currentChat: chats[0], // no current chat initially
  goToNextChat: () => set((state) => {
    console.log("next");
    // const nextIndex = state.currentChatIndex + 1;
    // if (nextIndex >= state.chat.length) {
    //   return; // do nothing if already at the last chat
    // }
    // return {
    //   currentChatIndex: nextIndex,
    //   currentChat: state.chat[nextIndex],
    // };
  }),
  goToPreviousChat: () => set((state) => {
    const previousIndex = state.currentChatIndex - 1;
    if (previousIndex < 0) {
      return; // do nothing if already at the first chat
    }
    return {
      currentChatIndex: previousIndex,
      currentChat: state.chat[previousIndex],
    };
  }),
  addMessageToChat: (message: Message) => set((state) => {
    if (!state.currentChat) {
      return; // do nothing if there's no current chat
    }
    return {
      chat: state.chat.map((chat) => {
        if (chat.id !== state.currentChat?.id) {
          return chat; // return other chat as is
        }
        return {
          ...chat,
          messages: [...chat.messages, message], // add the message to the current chat
        };
      }),
    };
  }),
}));
