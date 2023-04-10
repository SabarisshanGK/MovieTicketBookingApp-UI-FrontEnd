import { createContext, useState } from 'react';

const MoviesCard = createContext();

const MovieContext = ({ children }) => {
  const [seats, setSeats] = useState([]);
  const [ticket, setTicket] = useState([]);
  //const [occupied, setOccupied] = useState([]);
  const [bookmarked, setBookmarked] = useState();
  const [wishlist, setWishlist] = useState([]);

  return (
    <MoviesCard.Provider
      value={{
        seats,
        setSeats,
        ticket,
        setTicket,
        //occupied,
        // setOccupied,
        bookmarked,
        setBookmarked,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </MoviesCard.Provider>
  );
};

export { MovieContext, MoviesCard };
