<template>
	<div>
		<el-page-header @back="handleBack" content="修改会员类型信息"></el-page-header>
		<el-row>
			<el-col :span="24">
				<el-form 
					:model="addForm" 
					label-width="auto" 
					ref="addForm" 
					:rules="rules">
					<el-form-item size="mini" prop="name" label="名称">
						<el-input placeholder="请输入" clearable v-model.trim="addForm.name" ></el-input>
					</el-form-item>
					<el-form-item size="mini" prop="reamrk" label="备注">
						<el-input placeholder="请输入" type="textarea" clearable v-model.trim="addForm.remark" ></el-input>
					</el-form-item>
					
					<el-form-item size="mini">
						<el-button :loading="subLoading" @click="handleAdd" type="primary">提交</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import { mapActions,mapState } from 'vuex';
	export default{
		name:'card-type-add',
		data(){
			let _this = this;
			return {
				rules:{
					name:[{
						required:true,
						message:'名称不可以为空'
					}]
					
				},
				fileList:[],
				addForm:{
					name:'',
					bm:'',
					remark:'',
				},
				subLoading:false
			}
		},
		async created(){
			let id = this.$route.query.id;
			this.addForm = await this.findById(id)
			
		},
		methods:{
			...mapActions('userTypeModel',['findById','update']),
			handleBack(){
				this.$router.history.go(-1)
			},
			async handleAdd(){
				let valid = await this.$refs.addForm.validate().catch(err => err);
				if(valid){
					//将头像
					this.subLoading = true
					await this.update(this.addForm)
					this.subLoading = false
					this.handleBack()
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
</style>
