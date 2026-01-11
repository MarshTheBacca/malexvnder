import { sanitiseID } from '@/components/utils'
import { Link } from 'react-router-dom'

export function HomeContentItem({
  title,
  text,
  bgColour,
  bgImage,
  bgVideo,
}: Readonly<{
  title: string
  text: string
  bgColour: string
  bgImage?: string
  bgVideo?: string
}>): React.ReactElement<HTMLDivElement> {
  return (
    <section
      id={sanitiseID(title)}
      className={`relative flex h-[60vh] items-center justify-center overflow-hidden ${bgColour} p-8`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {bgVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 z-0 h-full w-full object-cover'
        >
          <source src={bgVideo} type='video/mp4' />
        </video>
      )}
      <div className='absolute inset-0 z-5 bg-black/30 bg-linear-to-b from-black/20 via-transparent to-black/40' />
      <div className='relative z-10 text-center text-white'>
        <Link to={`/${sanitiseID(title)}`}>
          <h1 className='mb-80 font-bodoni text-5xl font-extrabold tracking-tight select-none md:text-6xl'>
            {title}
          </h1>
        </Link>
        <p className='max-w-xl text-lg font-light opacity-90 select-none md:text-xl'>
          {text}
        </p>
      </div>
    </section>
  )
}
