import { NavBar } from '../NavBar/NavBar'

export function RootComponent(): React.ReactElement<HTMLDivElement> {
  return (
    <div className={'relative h-screen w-screen bg-gray-400'}>
      <NavBar />
    </div>
  )
}
