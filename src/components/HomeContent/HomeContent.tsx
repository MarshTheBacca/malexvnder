import { PageLayout } from '../NavBar/PageLayout/PageLayout'
import { HomeContentItem } from './HomeContentItem/HomeContentItem'

export function HomeContent(): React.ReactElement<HTMLDivElement> {
  return (
    <PageLayout>
      <HomeContentItem
        title={'About'}
        text={'Max is awesome'}
        bgColour={'bg-white'}
        bgImage={'/image.png'}
      />
      <HomeContentItem
        title={'Products'}
        text={"Max's potent products"}
        bgColour={'bg-yellow-200'}
        bgImage={'/image.png'}
      />
      <HomeContentItem
        title={'Campaign'}
        text={'Campaign for Max'}
        bgColour={'bg-blue-200'}
        bgImage={'/image.png'}
      />
      <HomeContentItem
        title={'Contact'}
        text={'Contact Max the great'}
        bgColour={'bg-gray-300'}
        bgImage={'/image.png'}
      />
    </PageLayout>
  )
}
