import { create } from "zustand";
interface LayoutStore {
	isSidebarOpen: boolean;
	sidebarWidth: number;
	toggleSidebar: () => void;
}

const useLayoutStore = create<LayoutStore>((set) => ({
	isSidebarOpen: true,
	sidebarWidth: 72,

	toggleSidebar: () =>
		set((state) => ({
			isSidebarOpen: !state.isSidebarOpen,
			sidebarWidth: !state.isSidebarOpen ? 72 : 240,
		})),
}));

export default useLayoutStore;
