export const signup = user => (
	$.ajax({
		method: 'POST',
		url: '/api/user',
		data: { user }
	})
);

export const login = user => (
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: { user }
	})
);

export const logout = () => (
	$.ajax({
		method: 'DELETE',
		url: '/api/session'
	})
);

export const fetchOtherUsers = () => (
	$.ajax({
		method: 'GET',
		url: '/api/users'
	})
);

// export const createAPI = (modelName) => {

// 	return {
// 		get: $.ajax({
// 			method: 'DELETE',
// 			url: '/api/' + modelName,
// 		}),
// 		index: (),
// 		destroy,
// 		update
// 		create
// 	}
// }