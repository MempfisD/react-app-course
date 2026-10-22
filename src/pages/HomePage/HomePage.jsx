import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { SearchInput } from '../../components/SearchInput'
import { API_URL } from '../../constans'
import { useFetch } from '../../hooks/useFetch.js'
import cls from './HomePage.module.css'

export const HomePage = () => {
	const [questions, setQuestions] = useState([])
	const [searchValue, setSearchValue] = useState('')

	const [getQuestion, isLoading, error] = useFetch(async url => {
		const response = await fetch(`${API_URL}/${url}`)
		const data = await response.json()

		setQuestions(data)
		return data
	})

	useEffect(() => {
		getQuestion('react')
	}, [])

	const onSearchChangeHandler = e => {
		setSearchValue(e.target.value)
	}

	return (
		<>
			<div className={cls.controlsContainer}>
				<SearchInput value={searchValue} onChange={onSearchChangeHandler} />
			</div>
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			<QuestionCardList cards={questions} />
		</>
	)
}
