'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  theme,
  Hero,
  Features,
  ListFeatures,
  GridImages,
} from 'ecommerce-mxtech';
import { MdArchitecture } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';

const { useToken } = theme;

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  return (
    <main
      style={{
        backgroundColor: '#DADADA',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='background-video'
          src='/images/fit.mp4'
          colorText='black'
          title={dataSite.subtitle}
          description={dataSite.description}
          withShadowText
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='Yoga Products'
              gridColumns={3}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              titleFilter={null}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#A0A0A0'
              selectedCategory={dataSite.categories[3]}
            />
          )}
        </div>
        <div>
          <GridImages
            stylesContainer={{
              height: 500,
            }}
            src={dataSite.products.map((product) => product.image)}
          />
        </div>
        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='Bicycle and cycling Products'
              gridColumns={3}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              titleFilter={null}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#A0A0A0'
              selectedCategory={dataSite.categories[2]}
            />
          )}
        </div>

        <div className='flex flex-col' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            backgroundColor='#F1D8BF'
            variant='text'
          />
        </div>

        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='All Products'
              gridColumns={3}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#A0A0A0'
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#F1D8BF'
            references={dataSite.references}
            gridColumns={3}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
