// src/pages/Game.jsx
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGameQuery } from "@/hooks/fetchGame";

import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaWindows,
  FaAppStoreIos,
  FaAndroid,
} from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Game() {
  const { gameId } = useParams();

  const { data: game, isLoading, isError, error } = useGameQuery(gameId);

  const platformIcons = {
    PC: <FaWindows className="text-white" />,
    PlayStation: <FaPlaystation className="text-white" />,
    Xbox: <FaXbox className="text-white" />,
    Android: <FaAndroid className="text-white" />,
    "Apple Macintosh": <FaApple className="text-white" />,
    Linux: <FaLinux className="text-white" />,
    Nintendo: <BsNintendoSwitch className="text-white" />,
    iOS: <FaAppStoreIos className="text-white" />,
  };

  const renderStars = (rating: number) => {
    const maxStars = 5;
    return (
      <div className="flex gap-1 text-white">
        {[...Array(maxStars)].map((_, i) =>
          i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
        )}
      </div>
    );
  };

  console.log(game);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (isError) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div className="text-white">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-5xl">{game.name}</h1>
          <p> {renderStars(Math.round(game.rating))}</p>
          <p>{game.released}</p>
          <div className="flex gap-2 pt-2">
            {game.parent_platforms.map((parent: any) => (
              <span key={parent.platform.id}>
                {platformIcons[
                  parent.platform.name as keyof typeof platformIcons
                ] || null}
              </span>
            ))}
          </div>
        </div>
        <div>
          {game.background_image && <img src={game.background_image} alt="" />}
        </div>
      </div>
      <div>
        <h2>A propos</h2>
        <p className="line-clamp-6">{game.description_raw}</p>
      </div>
      <NavLink className="" to="/">
        Retour à la liste des jeux
      </NavLink>
    </div>
  );
}
