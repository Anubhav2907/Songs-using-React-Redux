import React from "react";

const songsReducer = () => {
  return [
    {
      title: "Choo lo",
      duration: "4:30",
    },
    {
      title: "Dariya",
      duration: "4:10",
    },
    {
      title: "Jashan-e-bahara",
      duration: "5:15",
    },
    {
      title: "Aftaab",
      duration: "3:30",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
