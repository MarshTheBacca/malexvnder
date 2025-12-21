import clsx from 'clsx'
import { NavMenuItem } from './NavBarMenuItem/NavBarMenuItem'
import { Dispatch, SetStateAction } from 'react'

export function NavMenu({
  showMenu,
  setShowMenu,
}: Readonly<{
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
}>): React.ReactElement<HTMLDivElement> {
  return (
    <button
      className={clsx(
        'absolute z-2 flex w-full flex-col bg-gray-800',
        'transition-transform duration-300',
        showMenu ? 'translate-y-0' : '-translate-y-full',
      )}
      onClick={() => setShowMenu(false)}
    >
      <NavMenuItem text={'Home'} link={'/'} />
      <NavMenuItem text={'About'} link={'/about'} />
      <NavMenuItem text={'Products'} link={'/products'} />
      <NavMenuItem text={'Campaign'} link={'/campaign'} />
      <NavMenuItem text={'Contact'} link={'/contact'} />
    </button>
  )
}
