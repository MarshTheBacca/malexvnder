import { PageLayout } from '../NavBar/PageLayout/PageLayout'
import aboutImageSrc from '@/media/000016-3.jpg' // Using an existing asset

export function AboutContent(): React.ReactElement<HTMLDivElement> {
  return (
    <PageLayout>
      <div
        className={'flex w-full flex-1 flex-col overflow-y-scroll md:flex-row'}
      >
        <div
          className={'h-64 w-full bg-gray-200 md:h-auto md:w-1/2'}
          style={{
            backgroundImage: `url(${aboutImageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className={
            'flex flex-1 flex-col justify-center bg-[#ebebeb] p-10 md:p-20'
          }
        >
          <h1 className={'mb-8 font-bodoni text-5xl font-light'}>About</h1>
          <div
            className={
              'max-w-md space-y-6 text-lg leading-relaxed font-light text-gray-800'
            }
          >
            <p>
              <span className={'font-bold'}>malexvnder</span> was founded by Max
              Grimshaw in 2024.
            </p>
            <p>
              The design is defined by the unexpected. It is clothing that
              prioritises the silhouette while hiding its purpose in plain
              sight.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
