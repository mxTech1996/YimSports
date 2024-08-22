'use client';
import { useRouter } from 'next/navigation';
import { navData } from '@/data';
import { Navbar as NavbarV2, theme } from 'ecommerce-mxtech';
import { useInformation } from '@/store/useInformation';

const { useToken } = theme;

const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: 'underline',
        align: 'center',
      }}
      textColor='black'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-20',
      }}
      styleTitle={{
        fontWeight: 'bold',
        fontSize: 16,
      }}
      styleHeader={{ height: 100 }}
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push('/my-cart'),
      }}
      buttonContactProps={{
        onClick: () => router.push('/more-information'),
      }}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => {}}
      stylesContentLink={{
        backgroundColor: '#989795',
      }}
    />
  );
};

export default Navbar;
