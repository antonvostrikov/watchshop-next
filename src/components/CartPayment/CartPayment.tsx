import styles from './CartPayment.module.scss'

const CartPayment:React.FC = () => {
  return (
    <div className={styles.cartPayment}>
      <div className={styles.paymentContacts}>
        <h2>1. Контактные данные</h2>
        <div className={styles.paymentForm}>
          <div className={styles.paymentFormBlock}>
            <label htmlFor="name">Имя*</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.paymentFormBlock}>
            <label htmlFor="phone">Телефон*</label>
            <input type="text" id="phone" />
          </div>
          <div className={styles.paymentFormBlock}>
            <label htmlFor="email">Почта</label>
            <input type="text" id="email"/>
          </div>
        </div>
        <div className={styles.paymentFormEmail}>
          <input type="checkbox" defaultChecked={true} />
          <p>Получать sms/email с новостями и спецпредложениями</p>
        </div>
      </div>
      <div className={styles.paymentDelivery}>
        <h2>2. Доставка</h2>
        <div className={styles.paymentCountry}>
          <label htmlFor="country">Ваш город*</label>
          <input type="text" id="country" />
        </div>
      </div>
      <div className={styles.paymentMain}>
        <h2>3. Оплата</h2>
        <div className={styles.paymentWrapper}>
          <div className={styles.paymentBlock}>
            <input type="radio" />
            <span>Наличные</span>
          </div>    
          <div className={styles.paymentBlock}>
            <input type="radio" />
            <span>Картой на сайте</span>
          </div> 
          <div className={styles.paymentBlock}>
            <input type="radio" />
            <span>Картой при получении</span>
          </div>
          <div className={styles.paymentBlock}>
            <input type="radio" />
            <span>Безналичный расчет</span>
          </div> 
          <div className={styles.paymentBlock}>
            <input type="radio" />
            <span>Оплата долями</span>
          </div>
        </div>
        <button>Оформить заказ</button>
        <p>Нажимая на кнопку «Оформить заказ» вы соглашаетесь с условиями оферты и <u>политикой конфиденциальности</u>.</p>
      </div>
    </div>
  )
}

export default CartPayment