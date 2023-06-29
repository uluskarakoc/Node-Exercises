// import express from "express";
import db from "../lowdbConfig.js";
// import {v4 as uuid} from "uuid"
// GET
export async function getAlbums(req, res) {
  await db.read();
  res.send(db.data);
}
export async function findMusic(req, res) {
  await db.read();
  const year =req.params.year
  const albumYear =db.data.filter(album=>album.year==year)
  res.send(albumYear);
}
// POST

export async function postAlbums(req, res) {
  await db.read();

  const newAlbum =req.body
  newAlbum.id=7

  db.data.push(newAlbum)
  db.write()
  console.log(db.data);
  res.send(newAlbum);
}
// DELETE
export async function deleteAlbum(req,res){
  await db.read()
  const title=req.params.title
  db.data=db.data.filter(album=>album.title!==title)
  db.write()
  res.send(`Album ${title} wird gelöscht`)
}


// NOT FOUND

export async function notFound(req,res){
  await db.read();
  res.send(`Not Found`)
}


// bunu json olarak db nin icine koyduk

// let albums = [
//   { id: 1, title: "Nevermind", artist: "Nirvana", year: 1991 },
//   {
//     id: 2,
//     title: "The Dark Side of the Moon",
//     artist: "Pink Floyd",
//     year: 1973,
//   },
//   { id: 3, title: "Thriller", artist: "Michael Jackson", year: 1982 },
//   { id: 4, title: "The White Album", artist: "The Beatles", year: 1968 },
//   { id: 5, title: "London Calling", artist: "The Clash", year: 1979 },
//   { id: 6, title: "Pet Sounds", artist: "The Beach Boys", year: 1966 },
// ];

// bu kismi async funktionuna ceviriyoruz.

// export const getAlbums = (req, res) => {
//   res.send(albums);
// };
// export const postAlbums = (req, res) => {
//   res.send(albums);
// };

// export const postMusic = (req, res) => {
//   const turku = req.body;
//   turku.id = albums.length+1
//   albums.push(turku);
//   res.send({ added: true, data: turku });
// };
// export const findMusic=(req,res)=>{
//   const music =req.params.year
//   alb

// }

// export const notFound = (req, res) => {
//   res.send("Not Found");
// };
