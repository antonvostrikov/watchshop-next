import Container from "@/components/Container/Container"
import FilterPage from "@/components/FilterPage/FilterPage"
import TitlePage from "@/components/TitlePage/TitlePage"
import WrapperPage from "@/components/WrapperPage/WrapperPage"

const Watch:React.FC = () => {
  return (
    <section className="sectionWatch">
      <Container prefix="watches">
        <TitlePage title="Наручные часы" />
        <FilterPage />
        <WrapperPage />
      </Container>
    </section>
  )
}

export default Watch