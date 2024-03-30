import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CommonState = {
  test: string;
  darkMode: boolean;
};

export const commonStore = create(
  persist<CommonState>(
    () => ({
      test: '',
      darkMode: false,
    }),
    {
      name: 'project/common-state',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function setTest(value: string) {
  commonStore.setState({
    test: value,
  });
}

export function setDarkMode(value: boolean) {
  commonStore.setState({
    darkMode: value,
  });
}
