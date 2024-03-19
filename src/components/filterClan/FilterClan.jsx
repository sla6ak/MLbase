'use client'
import { clans } from '../../helpers/base/clans'
import { toggleButtonClans } from './../../redux/slices/aktivClans'
import {
  useAppSelector,
  useAppDispatch,
  useAppStore
} from './../../redux/hooks'

export const FilterClan = () => {
  const dispatch = useAppDispatch()
  const handleButtonClick = (nameE) => {
    console.log(nameE)
    dispatch(toggleButtonClans(nameE))
  }
  return (
    <div className="flex mt-6">
      {clans.map(({ name, nameE, color }, index) => (
        <button
          key={index}
          className={`${color} text-white font-bold py-2 px-4 rounded mr-2`}
          onClick={() => handleButtonClick(nameE)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}
