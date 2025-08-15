import { Dispatch, SetStateAction, useState } from 'react'
import { NavMenu } from './NavMenu/NavMenu'
import { NavIcon } from './NavMenu/NavIcon'

export function NavBar(): React.ReactElement<HTMLDivElement> {
  const [showMenu, setShowMenu]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false)
  return (
    <>
      <div className={'sticky z-3 flex h-10 items-center bg-gray-700'}>
        <NavIcon setShowMenu={setShowMenu} />
        <div
          className={
            'absolute left-1/2 flex h-full flex-grow -translate-x-1/2 bg-gray-700 text-2xl font-bold text-white'
          }
        >
          malexvnder
        </div>
      </div>
      <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  )
}
