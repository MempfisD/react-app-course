import { API_URL } from '../../constans/'
import { useEffect, useState } from 'react'
import { QuestionCardList } from '../../components/QuestionCardList'
import { Loader } from '../../components/Loader'
import { useFetch } from '../../hooks/useFetch.js'


export const HomePage = () => {
	const [questions, setQuestions] = useState([])
	const [getQuestion, isLoading, error] = useFetch(async (url) => {
		const response = await fetch(`${API_URL}/${url}`)
		const data = await response.json()

		setQuestions(data)
		return data
	})

	useEffect(() => {
		getQuestion('react')
	}, [])

	return (
		<>
			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			<QuestionCardList cards={questions} />
		</>
	)
}

