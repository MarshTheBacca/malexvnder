import clsx from 'clsx'
import { NavMenuItem } from './NavBarMenuItem/NavBarMenuItem'

export function NavMenu({
  showMenu,
}: {
  showMenu: boolean
}): React.ReactElement<HTMLDivElement> {
  return (
    <div
      className={clsx(
        'absolute z-2 flex w-full flex-col bg-gray-800',
        'transition-transform duration-300',
        showMenu ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <NavMenuItem text={'About'} />
      <NavMenuItem text={'Products'} />
      <NavMenuItem text={'Campaign'} />
      <NavMenuItem text={'Contact'} />
    </div>
  )
}
