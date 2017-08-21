<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb >
                <el-breadcrumb-item><i class="fa fa-tags"></i> 标签管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tagmgr-handle-box" :inline="true">
            <el-button type="info" @click="dialogAddFormVisible = true">
                新增
            </el-button>
            <el-button type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
        </div>

        <el-table :data="tagsdata" border >
            <el-table-column prop="name" label="标签名" width="150"></el-table-column>
            <el-table-column prop="description" label="描述" width="250" ></el-table-column>
            <el-table-column prop="created_at" label="创建时间"  ></el-table-column>
            <el-table-column prop="updated_at" label="更新时间"  ></el-table-column>
            <el-table-column label="操作" width="160">
                <template scope="scope" :inline="true">
                    <el-button size="small" :plain= true type="success" @click="iseditTag(scope.row)">编辑</el-button>
                    <el-button size="small" :plain= true type="danger" @click="isdelTag(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
                title="添加标签"
                :visible.sync="dialogAddFormVisible"
                size="tiny">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="标签名">
                            <el-input style="width:200px" v-model="addTagInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="描述">
                            <el-input style="width:200px" type="textarea" :rows="2" v-model="addTagInfo.description"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAddFormVisible = false">取 消</el-button>
                <el-button type="danger" @click="addTag">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="编辑标签"
                :visible.sync="dialogEditFormVisible"
                size="tiny">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="标签名">
                            <el-input style="width:200px" v-model="editTagInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="15">
                        <el-form-item label="描述">
                            <el-input style="width:200px" type="textarea" :rows="2" v-model="editTagInfo.description"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogEditFormVisible = false">取 消</el-button>
                <el-button type="danger" @click="editTag">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tagsdata:[],

                addTagInfo:{
                    name:'',
                    description:'',
                },

                editTagInfo:[],

                dialogAddFormVisible:false,
                dialogEditFormVisible:false,
            }
        },
        created:function () {
            this.getTags()
        },
        methods:{
            getTags:function () {
                this.axios.get('/tagmgr').then(function (response) {
                    this.tagsdata = response.data
                    this.$message.success('获取成功！')
                }.bind(this)).catch(function (response) {
                    this.$message.error('获取失败！')
                }.bind(this));
            },
            addTag:function () {
                //数据处理
                if(this.addTagInfo.name == "" || this.addTagInfo.name == null){
                    this.$message.warning('请输入标签名！')
                    return
                }
                if(this.addTagInfo.description == "" || this.addTagInfo.description == null){
                    this.$message.warning('请填写描述！')
                    return
                }

                this.axios.post('/tagmgr/addTag',{
                  name:this.addTagInfo.name,
                  description:this.addTagInfo.description
                }).then(function (response) {
                    this.$message.success('添加成功！')
                    this.dialogAddFormVisible = false
                    this.refresh()
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('添加失败！')
                }.bind(this));

            },
            iseditTag:function (row) {
                this.editTagInfo = row
                this.dialogEditFormVisible = true
            },
            editTag:function () {
                //数据处理
                if(this.editTagInfo.name == "" || this.editTagInfo.name == null){
                    this.$message.warning('请输入标签名！')
                    return
                }
                if(this.editTagInfo.description == "" || this.editTagInfo.description == null){
                    this.$message.warning('请填写描述！')
                    return
                }

                this.axios.post('/tagmgr/editTag',{
                    id:this.editTagInfo.id,
                    name:this.editTagInfo.name,
                    description:this.editTagInfo.description
                }).then(function (response) {
                    this.$message.success('编辑成功！')
                    this.dialogEditFormVisible = false
                    this.refresh()
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('编辑失败！')
                }.bind(this));

            },
            isdelTag:function (id) {
                this.$confirm('确定删除该标签？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('/tagmgr/deleteTag',{
                        id:id,
                    }).then(function (response) {
                        if(response.data == null || response.data == ''){
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                        }else{
                            this.$message.error('操作失败！')
                        }
                    }.bind(this)).catch(function (response) {
                        console.log(response)
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        })
                    }.bind(this))
                }).catch(() => {

                })
            },
            refresh:function () {
                this.getTags()
            },
        },
        watch:{

        },
        filters:{

        }
    }
</script>

<style>
    .tagmgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
</style>