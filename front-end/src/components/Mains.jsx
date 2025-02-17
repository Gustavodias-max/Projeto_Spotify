import React from "react";
import ItemList from './ItemList';
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Mains = ({ type }) => {
    return (
        <div className="main">
            {/* ItemList de artista */}
            {type === 'artists' || type === undefined ? (
                <ItemList
                    title="Artistas"
                    items={8}
                    itemsArray={artistArray}
                    path='/artists'
                    idpath="/artist" />) : (<></>)}

            {/* ItemList de musicas */}
            {type === 'songs' || type === undefined ? (
                <ItemList
                    title="Musicas"
                    items={30}
                    itemsArray={songsArray}
                    path='/songs'
                    idpath="/song" />) : (<></>)}

        </div>
    )
};

export default Mains;