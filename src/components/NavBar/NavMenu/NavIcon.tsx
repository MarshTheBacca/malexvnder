import { Dispatch, SetStateAction } from 'react'

export function NavIcon({
  setShowMenu,
}: Readonly<{
  setShowMenu: Dispatch<SetStateAction<boolean>>
}>): React.ReactElement<HTMLDivElement> {
  return (
    <button
      className={
        'aspect-square h-full bg-gray-700 transition-colors active:bg-gray-800'
      }
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        className={'h-10 w-10 text-white'}
        fill={'none'}
        viewBox={'0 0 24 24'}
        stroke={'currentColor'}
      >
        <path
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          strokeWidth={2}
          d={'M20 18H4m16-6H4M20 6H4'}
        />
      </svg>
    </button>
  )
}
