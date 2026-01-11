export function ProductsContentItem({
  imageSource,
}: Readonly<{ imageSource: string }>) {
  return (
    <section
      className={`relative h-[60vh] w-full`}
      style={{
        backgroundImage: `url(${imageSource})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
