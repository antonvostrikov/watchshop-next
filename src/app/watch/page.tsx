import Container from "@/components/Container/Container"
import Filters from "@/components/Filters/Filters"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Menu from "@/components/Header/Menu"
import TitlePage from "@/components/TitlePage/TitlePage"
import WrapperPage from "@/components/WrapperPage/WrapperPage"

const Watch:React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <section className="sectionWatch">
        <Container prefix="watches">
          <TitlePage title="Наручные часы" />
          <Filters />
          <WrapperPage />
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Watch