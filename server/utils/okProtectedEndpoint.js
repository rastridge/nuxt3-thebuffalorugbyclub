import jwt from 'jsonwebtoken'
export default (event) => {
	const runtimeConfig = useRuntimeConfig()

	const token = getHeaders(event).authorization
	let ok = true
	let verified = ''
	if (token) {
		verified = jwt.verify(token, runtimeConfig.API_SECRET)
	}
	if (!verified || !token) {
		throw createError({
			statusCode: 401,
			message: 'Unauthorized',
		})
		ok = false
	}
	return ok
}
