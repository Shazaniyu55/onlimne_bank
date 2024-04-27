import Layouts from "@/components/layout"
import AdainNavBar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
      <Hero/>
    </Layouts>
  )
}
