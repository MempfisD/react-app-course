import { useEffect, useMemo, useState } from 'react'
import { Loader } from '../../components/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { SearchInput } from '../../components/SearchInput'
import { API_URL } from '../../constans'
import { useFetch } from '../../hooks/useFetch.js'
import cls from './HomePage.module.css'

export const HomePage = () => {
	const [questions, setQuestions] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [sortSelectValue, setSortSelectValue] = useState('')

	const [getQuestion, isLoading, error] = useFetch(async url => {
		const response = await fetch(`${API_URL}/${url}`)
		const data = await response.json()

		setQuestions(data)
		return data
	})

	const cards = useMemo(() => {
		return questions.filter(d => d.question.toLowerCase().includes(searchValue.trim().toLowerCase()))
	}, [questions, searchValue])

	useEffect(() => {
		getQuestion(`react?${sortSelectValue}`)
	}, [sortSelectValue])

	const onSearchChangeHandler = e => {
		setSearchValue(e.target.value)
	}

	const onSortSelectChangeHandler = e => {
		setSortSelectValue(e.target.value)
	}

	return (
		<>
			<div className={cls.controlsContainer}>
				<SearchInput value={searchValue} onChange={onSearchChangeHandler} />
				<select value={sortSelectValue} onChange={onSortSelectChangeHandler} className={cls.select}>
					<option value=''>Sort by</option>
					<hr />
					<option value='_sort=level'> level ASC</option>
					<option value='_sort=-level'> level DESC</option>
					<option value='_sort=completed'> completed ASC</option>
					<option value='_sort=-completed'> completed DESC</option>
				</select>
			</div>
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			{cards.length === 0 && <p className={cls.noCardsInfo}>No cards found</p>}
			<QuestionCardList cards={cards} />
		</>
	)
}
