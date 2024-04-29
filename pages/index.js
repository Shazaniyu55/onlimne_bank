import Layouts from "@/components/layout"
import AdainNavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Hero2 from "@/components/hero2"

export default function Home() {
  return (
    <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
      <Hero/>
      <Hero2/>
    </Layouts>
  )
}
