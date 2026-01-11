import { PageLayout } from '../NavBar/PageLayout/PageLayout'
import { HomeContentItem } from './HomeContentItem/HomeContentItem'
import homeImageSrc from '@/media/000016-3.jpg'
import productsImageSrc from '@/media/MARCIELLA_16.JPG'
import contactImageSrc from '@/media/000011-2.jpg'
import campaignImageSrc from '@/media/000005.jpg'

export function HomeContent(): React.ReactElement<HTMLDivElement> {
  return (
    <PageLayout>
      <div className={'w-full flex-1 grow overflow-y-scroll'}>
        <HomeContentItem
          title={'About'}
          text={'The Creative Vision'}
          bgColour={'bg-white'}
          bgImage={homeImageSrc}
        />
        <HomeContentItem
          title={'Products'}
          text={'Current Work'}
          bgColour={'bg-yellow-200'}
          bgImage={productsImageSrc}
        />
        <HomeContentItem
          title={'Campaign'}
          text={'Campaign for Max'}
          bgColour={'bg-blue-200'}
          bgImage={campaignImageSrc}
        />
        <HomeContentItem
          title={'Contact'}
          text={'Inquiries & Collaborations'}
          bgColour={'bg-gray-300'}
          bgImage={contactImageSrc}
        />
      </div>
    </PageLayout>
  )
}
