import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
		children:[
			{
				path:'/user',
				name:'user',
				component:() => import(/*webpackChunkName:"ddd"*/'../views/system/user/user.vue'),
			},
			{
				path:'/user-add',
				name:'user-add',
				component:() => import('../views/system/user/user-add.vue'),
			},
			{
				path:'/user-edit',
				name:'user-edit',
				component:() => import('../views/system/user/user-edit.vue'),
			},
			{
				path:'/menu',
				name:'menu',
				component:() => import('../views/system/menu/menu.vue'),
			},
			{
				path:'/menu-add',
				name:'menu-add',
				component:() => import('../views/system/menu/menu-add.vue'),
			},
			{
				path:'/menu-edit',
				name:'menu-edit',
				component:() => import('../views/system/menu/menu-edit.vue'),
			},
			{
				path:'/menu-add-child',
				name:'menu-add-child',
				component:() => import('../views/system/menu/menu-add-child.vue'),
			},
			{
				path:'/menu-edit-child',
				name:'menu-edit-child',
				component:() => import('../views/system/menu/menu-edit-child.vue'),
			},
			{
				path:'/role',
				name:'role',
				component:() => import('../views/system/role/role.vue'),
			},
			{
				path:'/role-add',
				name:'role-add',
				component:() => import('../views/system/role/role-add.vue'),
			},
			{
				path:'/role-edit',
				name:'role-edit',
				component:() => import('../views/system/role/role-edit.vue'),
			},
			{
				path:'/role-menu',
				name:'role-menu',
				component:() => import('../views/system/role/role-menu.vue'),
			},
			{
				path:'/test-user',
				name:'test-user',
				component:() => import('../views/test/user/test-user.vue'),
			},
			{
				path:'/user-test',
				name:'user-test',
				component:() => import('../views/test/user-test/user-test.vue'),
			},
			{
				path:'/user-test-add',
				name:'user-test-add',
				component:() => import('../views/test/user-test/user-test-add.vue'),
			},
			{
				path:'/user-test-edit',
				name:'user-test-edit',
				component:() => import('../views/test/user-test/user-test-edit.vue'),
			},
			{
				path:'/upload',
				name:'upload',
				component:() => import('../views/test/upload/upload.vue'),
			},
			{
				path:'/goods',
				name:'goods',
				component:() => import('../views/shop/goods/goods.vue'),
			},
			{
				path:'/goods-add',
				name:'goods-add',
				component:() => import('../views/shop/goods/goods-add.vue'),
			},
			{
				path:'/goods-edit',
				name:'goods-edit',
				component:() => import('../views/shop/goods/goods-edit.vue'),
			},
			{
				path:'/shop-user',
				name:'shop-user',
				component:() => import('../views/shop/shop-user/shop-user.vue'),
			},
			{
				path:'/shop-user-add',
				name:'shop-user-add',
				component:() => import('../views/shop/shop-user/shop-user-add.vue'),
			},
			{
				path:'/shop-user-edit',
				name:'shop-user-edit',
				component:() => import('../views/shop/shop-user/shop-user-edit.vue'),
			},
			{
				path:'/editor',
				name:'editor',
				component:() => import('../views/test/editor/editor.vue'),
			},
			{
				path:'/news',
				name:'news',
				component:() => import('../views/shop/news/news.vue'),
			},
			{
				path:'/news-add',
				name:'news-add',
				component:() => import('../views/shop/news/news-add.vue'),
			},
			{
				path:'/news-edit',
				name:'news-edit',
				component:() => import('../views/shop/news/news-edit.vue'),
			},
			{
				path:'/news-preview',
				name:'news-preview',
				component:() => import('../views/shop/news/news-preview.vue'),
			},
			{
				path:'/card',
				name:'card',
				component:() => import('../views/shop/card/card.vue'),
			},
			{
				path:'/card-add',
				name:'card-add',
				component:() => import('../views/shop/card/card-add.vue'),
			},
			{
				path:'/card-add-multiple',
				name:'card-add-multiple',
				component:() => import('../views/shop/card/card-add-multiple.vue'),
			},
			{
				path:'/card-edit',
				name:'card-edit',
				component:() => import('../views/shop/card/card-edit.vue'),
			},
			{
				path:'/coupon',
				name:'coupon',
				component:() => import('../views/shop/coupon/coupon.vue'),
			},
			{
				path:'/coupon-add',
				name:'coupon-add',
				component:() => import('../views/shop/coupon/coupon-add.vue'),
			},
			{
				path:'/coupon-add-multiple',
				name:'coupon-add-multiple',
				component:() => import('../views/shop/coupon/coupon-add-multiple.vue'),
			},
			{
				path:'/coupon-edit',
				name:'coupon-edit',
				component:() => import('../views/shop/coupon/coupon-edit.vue'),
			},
			{
				path:'/order',
				name:'order',
				component:() => import('../views/shop/order/order.vue'),
			},
			{
				path:'/order-preview',
				name:'order-preview',
				component:() => import('../views/shop/order/order-preview.vue'),
			},
			{
				path:'/card-type',
				name:'card-type',
				component:() => import('../views/type/card-type/card-type.vue'),
			},
			{
				path:'/card-type-add',
				name:'card-type-add',
				component:() => import('../views/type/card-type/card-type-add.vue'),
			},
			{
				path:'/card-type-edit',
				name:'card-type-edit',
				component:() => import('../views/type/card-type/card-type-edit.vue'),
			},
			{
				path:'/coupon-type',
				name:'coupon-type',
				component:() => import('../views/type/coupon-type/coupon-type.vue'),
			},
			{
				path:'/coupon-type-add',
				name:'coupon-type-add',
				component:() => import('../views/type/coupon-type/coupon-type-add.vue'),
			},
			{
				path:'/coupon-type-edit',
				name:'coupon-type-edit',
				component:() => import('../views/type/coupon-type/coupon-type-edit.vue'),
			},
			{
				path:'/goods-type',
				name:'goods-type',
				component:() => import('../views/type/goods-type/goods-type.vue'),
			},
			{
				path:'/goods-type-add',
				name:'goods-type-add',
				component:() => import('../views/type/goods-type/goods-type-add.vue'),
			},
			{
				path:'/goods-type-edit',
				name:'goods-type-edit',
				component:() => import('../views/type/goods-type/goods-type-edit.vue'),
			},
			{
				path:'/user-type',
				name:'user-type',
				component:() => import('../views/type/user-type/user-type.vue'),
			},
			{
				path:'/user-type-add',
				name:'user-type-add',
				component:() => import('../views/type/user-type/user-type-add.vue'),
			},
			{
				path:'/user-type-edit',
				name:'user-type-edit',
				component:() => import('../views/type/user-type/user-type-edit.vue'),
			},
			{
				path:'/news-type',
				name:'news-type',
				component:() => import('../views/type/news-type/news-type.vue'),
			},
			{
				path:'/news-type-add',
				name:'news-type-add',
				component:() => import('../views/type/news-type/news-type-add.vue'),
			},
			{
				path:'/news-type-edit',
				name:'news-type-edit',
				component:() => import('../views/type/news-type/news-type-edit.vue'),
			},
		]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
