import Filter from "./Filter"

const brandsList = ['Casio', 'Rolex', 'Seiko', 'Citizen']
const maleList = ['Мужской', 'Женский']
const countryList = ['Россия', 'США', 'Япония', 'Китай', 'Швеция']

const Filters:React.FC = () => {
  return (
    <div className="filters" style={{ display: 'flex' }}>
      <div className="filtersLeft" style={{ display: 'flex' }}>
        <Filter title="Цена" type="price" />
        <Filter title="Бренд" list={brandsList} />
        <Filter title="Пол" list={maleList} />
        <Filter title="Страна" list={countryList} />
      </div>
      <div className="filtersRight">
        
      </div>
    </div>
  )
}

export default Filters