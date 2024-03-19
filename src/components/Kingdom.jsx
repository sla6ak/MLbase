'use client'
import { clans } from './../helpers/base/clans'
import React, { useState } from 'react'

export const Kingdom = ({ cellIndex, matchingPlayer }) => {
  const [hoveredPlayer, setHoveredPlayer] = useState(null)
  const clanThis = clans.find((el) => matchingPlayer?.clan === el.nameE)
  return (
    <div
      className={
        matchingPlayer
          ? ` ${clanThis.color} border-orange-600 flex justify-center items-center`
          : 'bg-amber-300 border border-orange-400 flex justify-center items-center'
      }
      style={{ width: '1rem', height: '1rem' }}
      onMouseEnter={() => setHoveredPlayer(cellIndex)}
      onMouseLeave={() => setHoveredPlayer(null)}
    >
      {/* <span>{cellIndex}</span> */}
      {matchingPlayer && (
        <>
          {hoveredPlayer === cellIndex && (
            <PlayerPopup player={matchingPlayer} />
          )}
        </>
      )}
    </div>
  )
}

const PlayerPopup = ({ player }) => {
  return (
    <div className="absolute bg-white bg-opacity-50  border border-gray-300 rounded p-2  transform -translate-x-1/2 -translate-y-1/2">
      <p>Nickname: {player.nikName}</p>
      <p>Rating: {player.reiting}</p>
      <p>Position: {player.position}</p>
      <p>Clan: {player.clan}</p>
      <p>Race: {player.rase}</p>
    </div>
  )
}
