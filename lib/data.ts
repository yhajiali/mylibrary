export const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["self-help", "productivity", "non-fiction"],
    year: 2024,
    status: "reading",
    favorite: false,
    pagesRead: 48,
    totalPages: 324,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 2,
    title: "Feel Good Productivity",
    author: "Ali Abdaal",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["productivity", "self-help", "non-fictional"],
    year: 2024,
    status: "reading",
    favorite: false,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 3,
    title: "Book Title 3",
    author: "Author 3",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 3", "Genre 2", "Genre 3"],
    year: 2024,
    status: "up next",
    favorite: false,
    pagesRead: 0,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 4,
    title: "Book Title 4",
    author: "Author 4",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: [, "Genre 2", "Genre 3"],
    year: 2024,
    status: "reading",
    favorite: true,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 5,
    title: "The Autobiography of Malcolm X",
    author: "Malcolm X & Alex Haley",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Biography", "Religious"],
    year: 2024,
    status: "finished",
    favorite: true,
    pagesRead: 100,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 6,
    title: "Book Title 6",
    author: "Author 6",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 6", "Genre 2", "Genre 3"],
    year: 2024,
    status: "finished",
    favorite: false,
    pagesRead: 100,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 7,
    title: "Book Title 7",
    author: "Author 7",
    cover: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 7", "Genre 2", "Genre 3"],
    year: 2024,
    status: "up next",
    favorite: true,
    pagesRead: 0,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
];
