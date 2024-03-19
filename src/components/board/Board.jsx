'use client'

import { useRef } from 'react'
import {
  useAppSelector,
  // useAppDispatch,
  useAppStore
} from './../../redux/hooks'
import { players } from '@/helpers/base/players'

export const Board = () => {
  const store = useAppStore()
  const clansAktive = useAppSelector((state) => {
    return state.aktivClans
  })
  // Получаем список включенных кланов
  const enabledClans = Object.keys(clansAktive).filter(
    (clan) => clansAktive[clan].onState
  )

  // Фильтруем игроков по включенным кланам
  const filteredPlayers = players.filter((player) =>
    enabledClans.includes(player.clan)
  )

  // console.log(enabledClans)
  // console.log(players)

  // Генерируем массив ячеек для заполнения сетки
  const cells = Array.from({ length: 73 * 22 }, (_, index) => index + 1)
  console.log(cells)
  return (
    <div className="flax flex-row h-auto w-10/12">
      <div className="h-full w-full bg-gray-100 flex justify-center items-center">
        <div
          className="grid grid-cols-73 grid-rows-22 gap-1 h-full w-full bg-orange-300"
          style={{ gridTemplateColumns: 'repeat(73, minmax(0, 1fr))' }}
        >
          {cells.map((cellIndex) => {
            const matchingPlayer = filteredPlayers.find((player) => {
              const [vertical, horizontal] = player.position
                .split('-')
                .map(Number)
              const playerIndex = horizontal * 73 + vertical + 1
              return playerIndex === cellIndex
            })
            return (
              <div
                key={cellIndex}
                className={
                  matchingPlayer
                    ? ` bg-amber-500 border border-orange-600 flex justify-center items-center`
                    : 'bg-amber-300 border border-orange-400 flex justify-center items-center'
                }
                style={{ width: '1rem', height: '1rem' }}
              >
                {/* <span>{cellIndex}</span> */}
                {matchingPlayer && (
                  <span className=" text-red-500">{cellIndex}</span>
                  // Здесь вы можете отображать любую информацию о игроке
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
