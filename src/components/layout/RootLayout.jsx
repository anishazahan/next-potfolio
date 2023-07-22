import Footer from "@/shared/Footer/Footer"
import Navbar from "@/shared/Navbar/Navbar"


const RootLayout = ({children}) => {
  return (
    <>
    <Navbar></Navbar>
    <div  className="h-[60vh]">
    {children}
    </div>
     <Footer></Footer>
    </>
  )
}

export default RootLayout