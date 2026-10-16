export const DelayFn = async (delay = 1000) => {
	return await new Promise((resolve) => setTimeout(resolve, delay))
}
