import BackgroundPaths from "@/src/components/BackgroundPaths"
import RegistrationForm from "@/src/components/RegistrationForm"
import Footer from "@/src/components/Footer";

export default function page() {



  return(
    <div className="w-screen h-screen mt-10 mb-20  text-3xl font-bold text-white">
      <BackgroundPaths/>
      <RegistrationForm/>
      <Footer/>
    </div>
  )
}