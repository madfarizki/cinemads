import React, { createContext, useContext, useState, useEffect } from "react";

type MovieBookmark = {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  media_type: string;
};

type BookmarkContextType = {
  bookmarks: MovieBookmark[];
  addBookmark: (movie: MovieBookmark) => void;
  removeBookmark: (id: number) => void;
};

const BookmarkContext = createContext<BookmarkContextType>({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
});

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<MovieBookmark[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (movie: MovieBookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, movie]);
  };

  const removeBookmark = (id: number) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((movie) => movie?.id !== id));
  };

  const contextValue: BookmarkContextType = {
    bookmarks,
    addBookmark,
    removeBookmark,
  };

  return <BookmarkContext.Provider value={contextValue}>{children}</BookmarkContext.Provider>;
};

export const useBookmarkContext = () => useContext(BookmarkContext);
