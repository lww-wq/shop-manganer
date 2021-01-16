import api from '../http'

export const getOrderListForPage = (queryForm) => {
	return api.http({
		url:'/order/list/page',
		method:'get',
		params:queryForm
	})
}


export const findOrderById = (id) => {
	return api.http({
		url:`/order/find/id/${id}`,
		method:'get',
		data:id
	})
}


export const deleteOrderById = (id) => {
	return api.http({
		url:`/order/delete/id/${id}`,
		method:'delete',
	})
}

export const sendGoods = (params) => {
	return api.http({
		url:`/order/send`,
		method:'get',
		params
	})
}
