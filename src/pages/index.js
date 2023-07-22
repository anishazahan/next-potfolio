import RootLayout from '@/components/layout/RootLayout';






const HomePage = () => {
  return (
    <>
     
  <h2 className='text-green-800 text-3xl text-center'>hellow</h2>


    </>
  )
}

export default HomePage



HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
