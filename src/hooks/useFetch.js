import { useState } from 'react'
import { DelayFn } from '../helpers/dalayFn.js'

export const useFetch = (callback) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const fetchFn = async (arg) => {
		try {
			setIsLoading(true)
			setError(null)
			await DelayFn()
			return callback(arg)


		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return [fetchFn, isLoading, error]
}