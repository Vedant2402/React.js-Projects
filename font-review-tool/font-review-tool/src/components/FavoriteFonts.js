import React, { useEffect, useState } from "react";

const FavoriteFonts = ({ settings }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const saveFavorite = () => {
    const newFav = { ...settings, id: Date.now() };
    const updated = [...favorites, newFav];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="favorites">
      <button onClick={saveFavorite}>⭐ Save Font Setting</button>
      {favorites.length > 0 && <h4>Saved ({favorites.length})</h4>}
    </div>
  );
};

export default FavoriteFonts;
