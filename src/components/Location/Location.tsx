import Modal from '../Modal/Modal'
import styles from './Location.module.scss'

interface ILocationProps {
	setLocationIs: (locationIs: boolean) => void
}

const location = [
  { id: 1, location: 'Москва' },
  { id: 2, location: 'Санкт-Петербург' },
  { id: 3, location: 'Ростов' },
  { id: 4, location: 'Владивосток' },
  { id: 5, location: 'Сочи' },
]

const Location:React.FC<ILocationProps> = ({ setLocationIs }) => {
	const closeModal = () => {
		setLocationIs(false)
	}

	const locationHandler = () => {
		setLocationIs(false)
	}

	return (
		<Modal title="Выберите город" closeModal={closeModal}>
			<div className={styles.locationList}>
				<ul>
					{ location.map(loc => <li key={loc.id} onClick={locationHandler}>{ loc.location }</li>) }
				</ul>
			</div>
		</Modal>
	)
}

export default Location