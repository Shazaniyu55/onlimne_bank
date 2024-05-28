import Layouts from "@/components/layout"
import AdainNavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Hero2 from "@/components/hero2"
import Services from "@/components/hero3"
import Hero4 from "@/components/hero4"
import Hero5 from "@/components/hero5"
import Hero6 from "@/components/hero6"

export default function Home() {
  return (
    <>
      <AdainNavBar imageSrc="/svg/logo.svg"/>
      <Hero/>
      <Hero2/>
      <Services/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Footer/>
    </>
  )
}
