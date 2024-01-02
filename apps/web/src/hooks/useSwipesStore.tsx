import { create } from "zustand";

type VibeCandidate = {
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

type Store = {
  vibeCandidates: VibeCandidate[];
  setVibeCandidates: (candidates: any) => void;
  setVibeCandidate: (candidate: any) => void;
  vibeCandidateIndex: number;
  vibeCandidate: VibeCandidate | null;
  goToNextCandidate: () => void;
  goToPreviousCandidate: () => void;
  likeVibeCandidate: () => void;
  superlikeVibeCandidate: () => void;
  skipVibeCandidate: () => void;
};

export const useSwipeStore = create<Store>((set) => ({
  vibeCandidates: [], // initialize with an empty array or fetch from API
  vibeCandidateIndex: 0, // start from the first match
  setVibeCandidates: (candidates) => {
    set((state) => {
      return ({
        ...state,
        vibeCandidates: candidates
      });
    });
  },
  setVibeCandidate: (vibeCandidate) => {
    set((state) => {
      return ({
        ...state,
        vibeCandidate
      })
    })
  },
  vibeCandidate: null, // no current match initially
  goToNextCandidate: () =>
    set((state) => {
      const nextIndex = state.vibeCandidateIndex + 1;
      if (nextIndex >= state.vibeCandidates.length) {
        return; // do nothing if already at the last match
      }
      return {
        vibeCandidateIndex: nextIndex,
        vibeCandidate: state.vibeCandidates[nextIndex],
      };
    }),
  goToPreviousCandidate: () =>
    set((state) => {
      const previousIndex = state.vibeCandidateIndex - 1;
      if (previousIndex < 0) {
        return; // do nothing if already at the first match
      }
      return {
        vibeCandidateIndex: previousIndex,
        vibeCandidate: state.vibeCandidates[previousIndex],
      };
    }),
  likeVibeCandidate: () =>
    set((state) => {
      console.log("liking!!!!");
      // handle logic for liking a match here
      // then go to the next match
      const nextIndex = state.vibeCandidateIndex + 1;
      if (nextIndex >= state.vibeCandidates.length) {
        return; // do nothing if already at the last match
      }
      return {
        vibeCandidateIndex: nextIndex,
        vibeCandidate: state.vibeCandidates[nextIndex],
      };
    }),
  superlikeVibeCandidate: () =>
    set((state) => {
      // handle logic for super liking a match here
      // then go to the next match
      const nextIndex = state.vibeCandidateIndex + 1;
      if (nextIndex >= state.vibeCandidates.length) {
        return; // do nothing if already at the last match
      }
      return {
        vibeCandidateIndex: nextIndex,
        vibeCandidate: state.vibeCandidates[nextIndex],
      };
    }),
  skipVibeCandidate: () =>
    set((state) => {
      // handle logic for skipping a match here
      // then go to the next match
      const nextIndex = state.vibeCandidateIndex + 1;
      if (nextIndex >= state.vibeCandidates.length) {
        return; // do nothing if already at the last match
      }
      return {
        vibeCandidateIndex: nextIndex,
        vibeCandidate: state.vibeCandidates[nextIndex],
      };
    }),
}));
