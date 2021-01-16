import api from '../http'

export const getGoodsTypeList = () => {
	return api.http({
		url:'/goods-type/list/all',
		method:'get'
	})
}


export const getGoodsTypeListForPage = (queryForm) => {
	return api.http({
		url:'/goods-type/list/page',
		method:'get',
		params:queryForm
	})
}

export const insertGoodsType = (addForm) => {
	return api.http({
		url:'/goods-type/insert',
		method:'put',
		data:addForm
	})
}

export const findGoodsTypeById = (id) => {
	return api.http({
		url:`/goods-type/find/id/${id}`,
		method:'get',
		data:id
	})
}

export const updateGoodsType = (addForm) => {
	return api.http({
		url:`/goods-type/update`,
		method:'put',
		data:addForm
	})
}

export const deleteGoodsTypeById = (id) => {
	return api.http({
		url:`/goods-type/delete/id/${id}`,
		method:'delete',
	})
}


