import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader'
import { QuestionCardList } from '../../components/QuestionCardList'
import { API_URL } from '../../constans/'
import { useFetch } from '../../hooks/useFetch.js'

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
			<input type='text' value={searchValue} onChange={onSearchChangeHandler} />
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			<QuestionCardList cards={questions} />
		</>
	)
}
