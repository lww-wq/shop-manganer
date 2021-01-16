<template>
	<div>
		test
		<input type="text">
		<el-button @click="handleClick">测试</el-button>
	</div>
</template>

<script>
	
	export default{
		name:'test-user',
		methods:{
			handleClick(){
				console.log(1)
				let JsonP = document.createElement('script')
				JsonP.src = 'http://localhost:3000/shop-service/v1/app/jsonp'
				JsonP.onload = function(){
					console.log(JsonP)
					console.log(123)
				}
				document.body.appendChild(JsonP)
			}
		}
	}
</script>

<style>
</style>
