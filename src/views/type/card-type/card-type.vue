<template>
	<div class="page">
		<p-page-header title="卡类型管理"></p-page-header>
		<el-form inline :model="queryForm">
			<el-form-item size="mini" label="名称">
				<el-input placeholder="请输入" clearable v-model="queryForm.name"></el-input>
			</el-form-item>
			<el-form-item size="mini">
				<el-button type="primary" :loading="queryLoading" @click="handleClick" icon="el-icon-search">查询</el-button>
			</el-form-item>
			<el-form-item size="mini">
			    <el-button type="success" @click="handleAdd" icon="el-icon-plus">新增</el-button>
			</el-form-item>
		</el-form>
		<el-table
			border
			size="mini"
			:data="list">
			<el-table-column label="名称" prop="name"></el-table-column>
			<el-table-column label="编码" prop="bm"></el-table-column>
				<el-table-column label="备注" prop="remark"></el-table-column>
			<el-table-column width="300px" label="操作" >
				<template v-slot="{row}">
					<el-button size="mini" v-if="row.freeze==0" @click="handleSetFreeze(row)" plain  type="danger">冻结</el-button>
					<el-button size="mini" v-if="row.freeze==1" @click="handleSetFreeze(row)" plain type="success">解冻</el-button>
					<el-button size="mini" icon="el-icon-edit" @click="handleEdit(row.id)" type="warning">修改</el-button>
					<el-button size="mini" @click="handleRemove(row.id)" icon="el-icon-remove" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="page.pno"
			:page-size="page.psize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="page.totalElements">
		</el-pagination>
	</div>
</template>

<script>
	// 引入vuex的state和actions的映射对象用来映射store中定义的state和actions
	import { mapState,mapActions } from 'vuex'
	export default{
		// 定义了组件的名称，用来结合keep-alive缓存页面
		name:'card-type',
		data(){
			return {
				// 调用查询接口需要的参数
				queryForm:{
					username:'',
					phone:'',
					beginTime:'',
					endTime:'',
					freeze:'',
					pno:1,
					psize:10
				},
				dateArr:[],
				// 查询按钮的加载动画开关
				queryLoading:false
			}
		},
		computed:{
			// 将vuex中定义的cardTypeModel模块的数据加载到本页的计算属性中，这样我们在本页就可以
			// 直接通过this.list和this.page访问到vuex中的数据，这里的数据只能读取不能写入
			...mapState('cardTypeModel',['list','page']),
			// 格式化日期的计算属性
			formatTime(){
				return function(time){
					let d = new Date(Number(time));
					return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
				}
			}
		},
		// 当第一次打开页面时会执行created生命周期
		async created(){
			await this.getListForPage(this.queryForm)
		},
		// 由于本页通过keep-alive进行了缓存，缓存后原有的生命周期不执行，所以通过activated来识别何时进入本页
		async activated(){
			await this.getListForPage(this.queryForm)
		},
		methods:{
			...mapActions('cardTypeModel',['getListForPage','deleteById','setFreeze']),
			handleDateChange(res){
				console.log(res)
				if(res!=null){
					this.queryForm.beginTime = res[0]
					this.queryForm.endTime = res[1]
				}else{
					this.queryForm.beginTime = ''
					this.queryForm.endTime = ''
				}
			},
			async handleClick(){
				this.queryLoading = true;
				this.queryForm.pno = 1;
				await this.getListForPage(this.queryForm)
				this.queryLoading = false;
			},
			// 点击分页组件的每页多少条切换时会触发这个回调，参数就是切换的条数
			async handleSizeChange(psize){
				this.queryForm.psize = psize
				this.queryForm.pno = 1;
				// 数据发生变化之后我们重新的调用查询方法
				await this.getListForPage(this.queryForm)
			},
			// 点击分页组件上一页下一页切换页面时触发的回调，参数就是跳到哪一页
			async handleCurrentChange(pno){
				this.queryForm.pno = pno
				// 改变请求的参数重新查询当页的数据
				await this.getListForPage(this.queryForm)
			},
			// 跳转到添加数据的页面
			handleAdd(){
				this.$router.push('/card-type-add')
			},
			// 删除数据调用的方法
			async handleRemove(id){
				// 通过同步化写法调用$confirm方法
				let confirm =await  this.$confirm('正在删除','提示',{
					type:'warning'
				}).catch(err => err)
				if(confirm == 'confirm'){
					// 如果点击确定
					//首先调用删除业务
					await this.deleteById(id)
					//删除业务调用完毕之后我们重新调用一次查询业务，来实现数据的更新
					await this.getListForPage(this.queryForm)
				}
			},
			// 跳转到编辑用户的页面
			handleEdit(id){
				this.$router.push({path:'/card-type-edit',query:{id}})
			},
			async handleSetFreeze(row){
				let message
				let freeze
				
				if(row.freeze == 1){
					message = '正在解冻当前会员，点击确认继续'
					freeze = 0
				}else{
					message = '正在冻结当前会员，点击确认继续'
					freeze = 1
				}
				let confirm = await this.$confirm(message,"提示",{type:'warning'}).catch(err=>err)
				if(confirm == 'confirm'){
					await this.setFreeze({
						id:row.id,
						freeze:freeze
					})
					await this.getListForPage(this.queryForm)
				}
			}
		}
	}
</script>

<style>
</style>
