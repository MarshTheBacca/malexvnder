import { Dispatch, SetStateAction, useState } from 'react'
import { NavMenu } from './NavMenu/NavMenu'

export function NavBar(): React.ReactElement<HTMLDivElement> {
  const [showMenu, setShowMenu]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false)
  const toggleMenu = (): void => {
    setShowMenu((prev: boolean) => !prev)
  }

  return (
    <>
      <div
        className={
          'sticky z-3 flex h-1/12 items-center bg-gray-800 font-bold text-white'
        }
      >
        <div
          className={
            'aspect-square h-full bg-gray-700 transition-colors active:bg-gray-800'
          }
          onClick={toggleMenu}
        />
        <div
          className={
            'flex h-full flex-grow items-center justify-center bg-gray-700 text-2xl'
          }
        >
          malexvnder
        </div>
      </div>
      <NavMenu showMenu={showMenu} />
    </>
  )
}
