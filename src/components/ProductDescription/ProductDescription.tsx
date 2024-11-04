import styles from './ProductDescription.module.scss'
import CasioLogo from '../../../public/images/casio-logo.jpg'
import Image from 'next/image'

const ProductDescription:React.FC = () => {
  return (
    <div className={styles.productDescription}>
      <div className={styles.productDescriptionTitle}>
        <h2>Описание</h2>
      </div>
      <div className={styles.productDescriptionWrapper}>
        <div className={styles.productContent}>
          <Image src={CasioLogo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias provident earum ex nam illo expedita perspiciatis natus hic reiciendis architecto eum ratione, in aut sit quaerat omnis, sint ab voluptatibus iusto voluptate cumque alias! Saepe tempore sequi aspernatur id aliquid! Quas, dolore quo nemo dolor culpa aliquam laborum quia.</p>
        </div>
        <div className={styles.productAside}>
          <dl className={styles.productList}>
            <dt>Артикул/модель</dt>
            <dd>Casio EFR-526L-1A</dd>
            <dt>Страна</dt>
            <dd>Япония</dd>
            <dt>Тип механизма</dt>
            <dd>кварцевый</dd>
            <dt>Корпус</dt>
            <dd>сталь</dd>
            <dt>Циферблат</dt>
            <dd>черный</dd>
            <dt>Браслет</dt>
            <dd>кожаный ремешок</dd>
            <dt>Водозащита</dt>
            <dd>100WR</dd>
            <dt>Стекло</dt>
            <dd>минеральное</dd>
            <dt>Габаритные размеры</dt>
            <dd>43,8х48,5мм, толщина 11,6мм, вес 74г</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription