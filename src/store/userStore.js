import { create } from "zustand";
import { devtools } from "zustand/middleware";

/*
User:
{
	  id: string,
	  name 
	  email 
	  faculty
	   token
}
    
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
        },
    ),
);

export default useUserStore;
