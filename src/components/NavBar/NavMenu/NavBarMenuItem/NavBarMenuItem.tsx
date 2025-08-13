export function NavMenuItem({
  text,
}: {
  text: string
}): React.ReactElement<HTMLDivElement> {
  return (
    <div
      className={
        'flex h-12 flex-grow items-center bg-gray-700 p-5 text-left text-2xl text-white transition-colors active:bg-gray-800'
      }
    >
      {text}
    </div>
  )
}
