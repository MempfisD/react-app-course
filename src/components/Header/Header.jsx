import cls from './Header.module.css'
import ReactLogo from '../../assets/react.svg'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
	const navigate = useNavigate()

	return (
		<header className={cls.header}>
			<p onClick={() => navigate('/')}>
				<img src={ReactLogo} alt='react logo' />
				<span>React Cards</span>
			</p>
			<div className={cls.headerButtons}>
				<Button onClick={() => navigate('/addquestion')}>Add</Button>
				<Button onClick={() => navigate('/login')}>Login</Button>
			</div>
		</header>
	)
}

