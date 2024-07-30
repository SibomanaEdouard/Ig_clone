import create from 'zustand';

const useStore = create((set) => ({
  savedMedia: [],
  addMedia: (media) => set((state) => ({ savedMedia: [...state.savedMedia, media] })),
  users: [
    { id: 1, name: 'John Doe', username: 'johndoe' },
    { id: 2, name: 'Jane Smith', username: 'janesmith' },
    // Add more users as needed
  ],
  searchResults: [],
  searchUsers: (query) => set((state) => ({
    searchResults: state.users.filter(
      (user) => user.name.toLowerCase().includes(query.toLowerCase()) || user.username.toLowerCase().includes(query.toLowerCase())
    ),
  })),
}));

export default useStore;
