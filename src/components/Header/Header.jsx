import cls from './Header.module.css'
import ReactLogo from '../../assets/react.svg'
import { Button } from '../Button'

export const Header = () => {
	return (
		<header className={cls.header}>
			<p>
				<img src={ReactLogo} alt='react logo' />
				<span>React Cards</span>
			</p>
			<div className={cls.headerButtons}>
				<Button isDisabled>Add</Button>
				<Button isActive>Login</Button>
			</div>
		</header>
	)
}

