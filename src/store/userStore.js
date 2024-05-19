import { create } from "zustand";
import { devtools } from "zustand/middleware";

/*
User:
    
*/

const useUserStore = create()(
	devtools(
		(set) => ({
			user: null,
			setUser: (user) => set({ user }),
		}),
		{
			enabled: true,
			name: "user-store",
		}
	)
);

export default useUserStore;
