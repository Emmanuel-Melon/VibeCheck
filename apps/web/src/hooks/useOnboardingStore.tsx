import { create } from 'zustand';

type UserInfo = {
  name: string;
  age: number;
  gender: string;
  // add other user info properties here
};

type UserPreference = {
  preferredAgeRange: [number, number];
  preferredGender: string;
  // add other user preference properties here
};

type Store = {
  userInfo: UserInfo | null;
  userPreference: UserPreference | null;
  setUserInfo: (userInfo: UserInfo) => void;
  setUserPreference: (userPreference: UserPreference) => void;
};

export const useOnboardingStore = create<Store>((set) => ({
  userInfo: null,
  userPreference: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  setUserPreference: (userPreference) => set({ userPreference }),
}));
