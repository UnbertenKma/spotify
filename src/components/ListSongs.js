import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setidSong(song.id);
  }, [song]);

  return (
    <div className="lg:col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white">
          <tr>
            <th className="w-[10%] h-12">#</th>
            <th className="text-left">Tên bài hát</th>
            <th className="w-[10%]">Ca sĩ</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>

        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={` bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 cursor-pointer ${
                idSong === song.id && "text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//
