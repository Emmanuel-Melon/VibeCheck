import { create } from "zustand";

type Match = {
  id: string;
  name: string;
  age: number;
  vibe: string;
  avatar: string;
  interests: string[];
  bio: string;
  distance: number;
  controls: {
    like: boolean;
    dislike: boolean;
  };
};

const girls = [
  {
    id: "1",
    name: "Emma Johnson",
    age: 26,
    vibe: "adventurous",
    avatar:
      "https://i0.wp.com/i.pinimg.com/originals/5a/1e/b9/5a1eb9194a09080d3e7d77574cf57822.jpg?resize=650,400",
    interests: ["reading", "traveling", "cooking", "music"],
    bio: "I love exploring new places and trying new recipes. I also enjoy reading books and listening to music.",
    distance: 10.5,
    controls: {
      like: true,
      dislike: false,
    },
    images: [
      {
        id: 1,
        name: "hey",
      },
      {
        id: 2,
        name: "hey",
      },
    ],
  },
  {
    id: "2",
    name: "Sophia Williams",
    age: 28,
    vibe: "romantic",
    avatar: "https://www.refinery29.com/images/10353760.jpg",
    interests: ["gaming", "hiking", "art"],
    bio: "I love spending time outdoors and exploring new hiking trails. I also enjoy gaming and creating art.",
    distance: 15.3,
    controls: {
      like: false,
      dislike: true,
    },
    images: [
      {
        id: 1,
        name: "hey",
      },
      {
        id: 2,
        name: "hey",
      },
      {
        id: 3,
        name: "hey",
      },
    ],
  },
  {
    id: "3",
    name: "Olivia Brown",
    age: 25,
    vibe: "fun",
    avatar:
      "https://i0.wp.com/i.pinimg.com/originals/ea/33/54/ea3354fc1adfb967691d628fd8d2c726.jpg?resize=650,400",
    interests: ["sports", "music", "cooking"],
    bio: "I enjoy playing sports and listening to music. I also love trying out new recipes.",
    distance: 12.7,
    controls: {
      like: true,
      dislike: false,
    },
    images: [
      {
        id: 1,
        name: "hey",
      },
      {
        id: 2,
        name: "hey",
      },
      {
        id: 3,
        name: "hey",
      },
      {
        id: 4,
        name: "hey",
      },
      {
        id: 5,
        name: "hey",
      },
    ],
  },
  {
    id: "4",
    name: "Isabella Jones",
    age: 27,
    vibe: "relaxed",
    avatar:
      "https://i.pinimg.com/originals/74/cc/8c/74cc8ccf2b6d7f3c51c9612df883a0d9.png",
    interests: ["reading", "traveling", "gaming"],
    bio: "I love reading books and traveling to new places. I also enjoy playing video games.",
    distance: 14.2,
    controls: {
      like: false,
      dislike: true,
    },
    images: [
      {
        id: 1,
        name: "hey",
      },
      {
        id: 2,
        name: "hey",
      },
      {
        id: 3,
        name: "hey",
      },
    ],
  },
  {
    id: "5",
    name: "Ava Taylor",
    age: 29,
    vibe: "adventurous",
    avatar:
      "https://www.stylevore.com/wp-content/uploads/2020/01/1b879ad961b1c7c082e8d21be64bb0d7.jpg",
    interests: ["music", "sports", "cooking"],
    bio: "I love exploring new places and trying out new recipes. I also enjoy playing sports and listening to music.",
    distance: 11.8,
    controls: {
      like: true,
      dislike: false,
    },
    images: [
      {
        id: 1,
        name: "hey",
      },
    ],
  },
];

type Store = {
  matches: Match[];
  currentMatchIndex: number;
  currentMatch: Match | null;
  goToNextMatch: () => void;
  goToPreviousMatch: () => void;
  likeMatch: () => void;
  superLikeMatch: () => void;
  skipMatch: () => void;
};

export const useSwipeStore = create<Store>((set) => ({
  matches: girls, // initialize with an empty array or fetch from API
  currentMatchIndex: 0, // start from the first match
  currentMatch: girls[4], // no current match initially
  goToNextMatch: () =>
    set((state) => {
      const nextIndex = state.currentMatchIndex + 1;
      if (nextIndex >= state.matches.length) {
        return; // do nothing if already at the last match
      }
      return {
        currentMatchIndex: nextIndex,
        currentMatch: state.matches[nextIndex],
      };
    }),
  goToPreviousMatch: () =>
    set((state) => {
      const previousIndex = state.currentMatchIndex - 1;
      if (previousIndex < 0) {
        return; // do nothing if already at the first match
      }
      return {
        currentMatchIndex: previousIndex,
        currentMatch: state.matches[previousIndex],
      };
    }),
  likeMatch: () =>
    set((state) => {
      console.log("liking!!!!");
      // handle logic for liking a match here
      // then go to the next match
      const nextIndex = state.currentMatchIndex + 1;
      if (nextIndex >= state.matches.length) {
        return; // do nothing if already at the last match
      }
      return {
        currentMatchIndex: nextIndex,
        currentMatch: state.matches[nextIndex],
      };
    }),
  superLikeMatch: () =>
    set((state) => {
      // handle logic for super liking a match here
      // then go to the next match
      const nextIndex = state.currentMatchIndex + 1;
      if (nextIndex >= state.matches.length) {
        return; // do nothing if already at the last match
      }
      return {
        currentMatchIndex: nextIndex,
        currentMatch: state.matches[nextIndex],
      };
    }),
  skipMatch: () =>
    set((state) => {
      // handle logic for skipping a match here
      // then go to the next match
      const nextIndex = state.currentMatchIndex + 1;
      if (nextIndex >= state.matches.length) {
        return; // do nothing if already at the last match
      }
      return {
        currentMatchIndex: nextIndex,
        currentMatch: state.matches[nextIndex],
      };
    }),
}));
