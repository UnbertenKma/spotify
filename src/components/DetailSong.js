import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="lg:col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold text-center lg:text-left">
        Now playing
      </h2>
      <h2 className="text-neutral-400 text-center lg:text-left text-1xl lg:text-2xl">
        {song.name}
      </h2>
      <div className="w-[140px] lg:w-[240px] m-auto mt-3 lg:mt-10">
        <img
          className="w-full rounded-[50%] rotate-360"
          src={song.links.images[0].url}
          alt="avatar"
        ></img>
      </div>

      <div className="flex justify-evenly items-center mt-6 lg:mt-10">
        <img
          className="w-[40px] lg:w-[70px] rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-1xl lg:text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
