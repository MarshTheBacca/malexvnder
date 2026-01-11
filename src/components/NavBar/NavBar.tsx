import {
  Link,
  useLocation,
  useNavigate,
  Location,
  NavigateFunction,
} from 'react-router-dom'

export function NavBar(): React.ReactElement<HTMLDivElement> {
  const location: Location = useLocation()
  const navigate: NavigateFunction = useNavigate()
  const isHome: boolean = location.pathname === '/'

  return (
    <nav
      className={
        'sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-4'
      }
    >
      <div className={'flex w-24 justify-start'}>
        {!isHome && (
          <button
            onClick={() => navigate(-1)}
            className={
              'cursor-pointer text-sm font-light tracking-widest uppercase transition-opacity hover:opacity-50'
            }
          >
            ← Back
          </button>
        )}
      </div>
      <Link
        to={'/'}
        className={
          'absolute left-1/2 -translate-x-1/2 font-bodoni text-3xl font-bold tracking-tighter text-black'
        }
      >
        malexvnder
      </Link>
      <div className={'w-24'} />
    </nav>
  )
}
