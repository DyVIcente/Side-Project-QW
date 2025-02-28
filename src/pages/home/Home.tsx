import { useGames } from "../../hooks/fetchGames";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Home() {
  const { data, error, isLoading } = useGames();

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  console.log(data, "data");

  const platformIcons = {
    PC: <FaWindows className="text-black" />,
    PlayStation: <FaPlaystation className="text-black" />,
    Xbox: <FaXbox className="text-black" />,
    Android: <FaAndroid className="text-black" />,
    "Apple Macintosh": <FaApple className="text-black" />,
    Linux: <FaLinux className="text-black" />,
    Nintendo: <BsNintendoSwitch className="text-black" />,
    iOS: <FaAppStoreIos className="text-black" />,
  };

  const renderStars = (rating: number) => {
    const maxStars = 5;
    return (
      <div className="flex gap-1 text-black">
        {[...Array(maxStars)].map((_, i) =>
          i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
        )}
      </div>
    );
  };

  return (
    <div className="pt-20 mx-10">
      <h1 className="text-[#fafafa] py-10 text-4xl font-bold">
        Liste des Jeux
      </h1>
      <div
        className={clsx(
          "m-auto mb-10 grid  justify-items-center gap-x-10 gap-y-4 ",
          "md:gap-y-6",
          "dark:grayscale-[0.2]",
          "grid-responsive-home"
        )}
      >
        {data.results.map((game: any) => (
          <NavLink to={`game/${game.name}/${game.id}`} key={game.id}>
            <Card className="bg-[#fafafa] shadow-md shadow-cyan-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-bold text-2xl">
                    {game.name}
                  </CardTitle>
                  <CardDescription>
                    {renderStars(Math.round(game.rating))}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  className="rounded-xl"
                  src={game.background_image}
                  alt=""
                />
                <div className="flex gap-2 pt-2">
                  {game.parent_platforms.map((parent: any) => (
                    <span key={parent.platform.id}>
                      {platformIcons[
                        parent.platform.name as keyof typeof platformIcons
                      ] || null}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
