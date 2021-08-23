import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import { HeartIconProps } from "../types";

const HeartIcon = ({ favorite, id }: HeartIconProps) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleClick = () => {
    setIsFavorite((fav) => !fav);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute top-2 right-4"
      id={id?.toString()}
    >
      {isFavorite ? (
        <FavoriteBorderIcon
          className={`text-light text-red-300 hover:text-red-900`}
        />
      ) : (
        <FavoriteIcon
          className={`text-light text-red-900 hover:text-red-300`}
        />
      )}
    </div>
  );
};

export default HeartIcon;
