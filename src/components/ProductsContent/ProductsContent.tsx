import { PageLayout } from '../NavBar/PageLayout/PageLayout'
import { ProductsContentItem } from './ProductsContentItem/ProductsContentItem'
import item1 from '@/media/000007-6.jpg'
import item2 from '@/media/000012-4.jpg'
import item3 from '@/media/front Max.jpg'
import item4 from '@/media/000014-4.jpg'

export function ProductsContent(): React.ReactElement<HTMLDivElement> {
  return (
    <PageLayout>
      <div className={'w-full flex-1 grow overflow-y-scroll'}>
        <h1 className={'mb-8 text-center font-bodoni text-5xl font-light'}>
          Products
        </h1>
        <ProductsContentItem imageSource={item1} />
        <ProductsContentItem imageSource={item2} />
        <ProductsContentItem imageSource={item3} />
        <ProductsContentItem imageSource={item4} />
      </div>
    </PageLayout>
  )
}
