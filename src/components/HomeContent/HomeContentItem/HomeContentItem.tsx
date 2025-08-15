import { sanitiseID } from '@/components/utils'
import { Link } from 'react-router-dom'

export function HomeContentItem({
  title,
  text,
  bgColour,
  bgImage,
}: {
  title: string
  text: string
  bgColour: string
  bgImage: string
}): React.ReactElement<HTMLDivElement> {
  return (
    <section
      id={sanitiseID(title)}
      className={`flex h-[60vh] items-center justify-center ${bgColour} p-8 bg-[url(${bgImage})]`}
    >
      <div className='text-center'>
        <Link to={`/${sanitiseID(title)}`}>
          <h1 className='mb-4 text-5xl font-extrabold select-none md:text-6xl'>
            {title}
          </h1>
        </Link>
        <p className='max-w-xl text-lg select-none md:text-xl'>{text}</p>
      </div>
    </section>
  )
}
