import { X } from "lucide-react"

import styles from './Location.module.scss'

import cn from "classnames"

interface ILocationProps {
	setLocationIs: (a: boolean) => void
}

const location = [
  { id: 1, location: 'Москва' },
  { id: 2, location: 'Санкт-Петербург' },
  { id: 3, location: 'Ростов' },
  { id: 4, location: 'Владивосток' },
  { id: 5, location: 'Сочи' },
]

const Location:React.FC<ILocationProps> = ({ setLocationIs }) => {
	const locationHandler = () => {
		setLocationIs(false)
	}

	return (
		<div className={cn(styles.locationWrapper, 'active')} onClick={() => setLocationIs(false)}>
			<div className={styles.location} onClick={(e) => e.stopPropagation()}>
				<div className={styles.locationClose}>
					<span onClick={() => setLocationIs(false)}><X /></span>
				</div>
				<div className={styles.locationTitle}>
					<h2>Выберите город</h2>
				</div>
				<div className={styles.locationList}>
					<ul>
						{ location.map((loc) => <li key={loc.id} onClick={locationHandler}>{loc.location}</li>) }
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Location