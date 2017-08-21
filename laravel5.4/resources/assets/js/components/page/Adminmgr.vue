<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-user"></i> 用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="adminmgr-handle-box" :inline="true" >
            <el-button :plain="true" type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
        </div>
        <el-table :data="datalist" border>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
            <el-table-column prop="login_ip" label="最近登陆IP" width="130" ></el-table-column>
            <el-table-column prop="login_time" sortable label="最近登陆时间" ></el-table-column>
            <el-table-column label="操作" width="220">
                <template scope="scope">
                    <el-button size="small" :plain="true" type="info" @click="iseditUser(scope.row)">编辑</el-button>
                    <el-button size="small" :plain="true" type="warning" @click="isrepealUser(scope.row.id)">撤销</el-button>
                    <el-button size="small" :plain="true" type="danger" @click="isdelUser(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog title="编辑用户信息" :visible.sync="dialogEditFormVisible">
            <el-form :model="user_row" label-width="80px">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="名称">
                            <el-input style="width:200px" v-model="user_row.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="性别">
                            <el-select v-model="user_row.sex" style="width:200px">
                                <el-option value="男" v-if="user_row.sex=='女'">男</el-option>
                                <el-option value="女" v-if="user_row.sex=='男'">女</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="邮箱">
                            <el-input style="width:200px" v-model="user_row.email" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="生日">
                            <el-date-picker
                                    v-model="date_picker"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="disabledDate"
                                    style="width:200px">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="电话">
                            <el-input style="width:200px" v-model="user_row.telephone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="学历">
                            <el-select v-model="user_row.education" style="width:200px">
                                <el-option label="本科" value="本科">本科</el-option>
                                <el-option label="硕士" value="硕士">硕士</el-option>
                                <el-option label="博士" value="博士">博士</el-option>
                                <el-option label="专科" value="专科">专科</el-option>
                                <el-option label="高中" value="高中">高中</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-form-item label="地址">
                        <el-input style="width:467px" v-model="user_row.address"></el-input>
                    </el-form-item>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUser">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog
                title="提示"
                :visible.sync="dialogRepealVisible"
                size="tiny">
            <span>确定撤销角色？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogRepealVisible = false">取 消</el-button>
                <el-button type="danger" @click="repealUser">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog
                title="提示"
                :visible.sync="dialogDeleteVisible"
                size="tiny">
            <span>确定删除该用户？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteVisible = false">取 消</el-button>
                <el-button type="danger" @click="delUser">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //所有用户数据
                userlist: [],

                //时间选择器
                date_picker:'',

                //单个用户数据
                user_row:[],

                //模态框显示状态
                dialogEditFormVisible:false,
                dialogRepealVisible:false,
                dialogDeleteVisible:false,

                //撤销角色
                repeal_id:'',

                //删除用户
                del_id:'',
            }
        },
        created:function () {
            this.getAllAdmin()
        },
        computed:{
            datalist(){
                const self = this
                return self.userlist
            }
        },
        methods:{
            getAllAdmin:function () {
                this.axios.get('/usermgr/getadmin').then(function (response) {
                    this.userlist = response.data
                    this.$message.success('获取成功！')
                    }.bind(this))
                    .catch(function (response) {
                        console.log(response)
                        this.$message.error(response)
                    }.bind(this))
            },
            iseditUser:function(row){
                this.dialogEditFormVisible = true
                this.user_row = row
                this.date_picker = row.birthday
            },
            editUser:function(){
                //数据检查
                var mytele=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(this.user_row.telephone != ''){
                    if(!mytele.test(this.user_row.telephone)){
                        this.$message.error('手机号码格式错误！')
                        return
                    }
                }
                if(this.user_row.name == ''){
                    this.$message.error('请输入名称！')
                    return
                }

                var requestUrl = '/usermgr/'+this.user_row.id
                this.axios.patch(requestUrl,{
                    name:this.user_row.name,
                    sex:this.user_row.sex,
                    tele:this.user_row.telephone,
                    birth:this.date_picker,
                    edu:this.user_row.education,
                    address:this.user_row.address
                }).then(function (response) {
                    this.$message.success('编辑成功！')
                }.bind(this))
                    .catch(function (response) {
                        this.$message.error('编辑失败！')
                        this.$message.error(response)
                    }.bind(this));
                this.dialogEditFormVisible = false
            },
            isdelUser:function(id){
                this.del_id = id
                this.dialogDeleteVisible = true
            },
            delUser:function(){
                var requestUrl  = '/usermgr/'+ this.del_id
                this.axios.delete(requestUrl).then(function (response) {
                    this.$message.success('删除成功！')
                }.bind(this)).catch(function (response) {
                    this.$message.error('删除失败！')
                    this.$message.error(response)
                }.bind(this));
                this.dialogDeleteVisible = false
            },
            isrepealUser:function(id){
                this.repeal_id = id
                this.dialogRepealVisible = true
            },
            repealUser:function(){
                console.log(this.repeal_id)
                //var requestUrl  = '/usermgr/'+ this.del_id
                /*this.axios.delete(requestUrl).then(function (response) {
                    this.$message.success('删除成功！')
                }.bind(this)).catch(function (response) {
                    this.$message.error('删除失败！')
                    this.$message.error(response)
                }.bind(this));*/
                this.dialogRepealVisible = false
            },
            disabledDate() {
                //console.log(time.getTime() < Date.now() - 8.64e7);
                return false
            },
            refresh:function () {
                this.getAllAdmin()
            },
        },
        watch:{

        },
        filters:{

        }
    }

</script>

<style>
    .adminmgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
</style>