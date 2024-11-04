import Container from "@/components/Container/Container"
import LinkBack from "@/components/LinkBack/LinkBack"
import ProductAbout from "@/components/ProductAbout/ProductAbout"
import ProductDescription from "@/components/ProductDescription/ProductDescription"
import ProductSlider from "@/components/ProductSlider/ProductSlider"

const Product:React.FC = () => {
  return (
    <section className="sectionProduct">
      <Container prefix="product">
        <LinkBack />
        <div className="wrapperProduct" style={{display: 'flex', justifyContent: 'space-between'}}>
          <ProductSlider />
          <ProductAbout />
        </div>
        <div className="wrapperDescription">
          <ProductDescription />
        </div>
      </Container>
    </section>
  )
}

export default Product 