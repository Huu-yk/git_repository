<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-user"></i> 用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>会员管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="usermgr-handle-box" :inline="true">
            <el-dropdown @command="handleCommand">
                <el-button type="primary">
                    批量操作<i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="batchdel">批量删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button :plain="true" type="warning" @click="dialogAddFormVisible = true">
                新增
            </el-button>
            <el-button :plain="true" type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
            <el-input  placeholder="搜索关键词" v-model="searchWord" icon="search" :on-icon-click="search" class="search-input"></el-input>
        </div>
        <el-table :data="datalist" border ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
            <el-table-column prop="description" label="身份" width="120"></el-table-column>
            <el-table-column prop="login_ip" label="最近登陆IP" width="130" ></el-table-column>
            <el-table-column prop="login_time" sortable label="最近登陆时间" ></el-table-column>
            <el-table-column label="操作" width="200">
                <template scope="scope">
                    <el-button size="small"
                               @click="iseditUser(scope.row)">编辑</el-button>
                    <el-button size="small" type="info"
                               @click="authorization(scope.row)">授权</el-button>
                    <el-button size="small" type="danger"
                               @click="isdelUser(scope.row.id)">删除</el-button>

                </template>
            </el-table-column>
        </el-table>

        <div class="paging">
            <el-pagination class="pagination"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page.sync="currpage"
                           :page-size='9'
                           layout="total, prev, pager, next"
                           :total=total>
            </el-pagination>
        </div>


        <el-dialog title="添加用户" :visible.sync="dialogAddFormVisible">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="名称">
                            <el-input style="width:200px" v-model="addUserInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="性别">
                            <el-select v-model="addUserInfo.sex" style="width:200px">
                                <el-option value="男">男</el-option>
                                <el-option value="女">女</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="邮箱">
                            <el-input style="width:200px" v-model="addUserInfo.email"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="生日">
                            <el-date-picker
                                    v-model="addUserInfo.birth"
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
                            <el-input style="width:200px" v-model="addUserInfo.tele"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="学历">
                            <el-select v-model="addUserInfo.edu" style="width:200px">
                                <el-option  value="本科">本科</el-option>
                                <el-option  value="硕士">硕士</el-option>
                                <el-option  value="博士">博士</el-option>
                                <el-option  value="专科">专科</el-option>
                                <el-option  value="高中">高中</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-form-item label="地址">
                        <el-input style="width:467px" v-model="addUserInfo.address"></el-input>
                    </el-form-item>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
            </div>
        </el-dialog>


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
                                <el-option label="本科" value="本科"></el-option>
                                <el-option label="硕士" value="硕士"></el-option>
                                <el-option label="博士" value="博士"></el-option>
                                <el-option label="专科" value="专科"></el-option>
                                <el-option label="高中" value="高中"></el-option>
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
                :visible.sync="dialogDeleteVisible"
                size="tiny">
            <span>确定删除该用户？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteVisible = false">取 消</el-button>
                <el-button type="danger" @click="delUser">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
                title="提示"
                :visible.sync="dialogBatchDeleteVisible"
                size="tiny">
            <span>确定删除用户 {{the_deluser}} ？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogBatchDeleteVisible = false">取 消</el-button>
                <el-button type="danger" @click="batch_delUser">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
                title="授予用户身份"
                :visible.sync="dialogAuthVisible"
                size="tiny">
            <div>
                <span class="setRole-text">请选择身份：</span>&nbsp;&nbsp;
                <el-radio-group v-model="rolename">
                    <el-radio-button label="管理员"></el-radio-button>
                    <el-radio-button label="超级会员"></el-radio-button>
                    <el-radio-button label="撤销身份"></el-radio-button>
                </el-radio-group>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogAuthVisible = false">取 消</el-button>
                <el-button :plain="true" type="info" @click="setRole">确 定</el-button>
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

                //初始化模态框
                dialogAddFormVisible:false,
                dialogEditFormVisible:false,
                dialogDeleteVisible:false,
                dialogBatchDeleteVisible:false,
                dialogAuthVisible:false,

                //单个用户数据
                user_row:[],

                //添加用户数据
                addUserInfo:{
                    name:'',
                    email:'',
                    sex:'',
                    tele:'',
                    birth:'',
                    edu:'',
                    address:''
                },

                //搜索框数据
                searchWord:'',
                is_search: false,

                //时间选择器
                date_picker:'',

                //删除用户的id
                del_id:'',

                //多行选择
                multipleSelection:[],

                //批量删除
                del_list: [],
                the_deluser:'',
                del_result:[],

                //分页处理
                currpage:1,
                total:0,
                totaldata:[],

                //授予角色
                rolename:'管理员',
                curr_userid:'',
                curr_roleid:'',
            }
        },
        created:function(){
            this.getAllUser();
        },
        computed:{
            //搜索框过滤器
            datalist(){
                const self = this;
                if(self.searchWord != ''){
                    self.total = 0
                    return self.totaldata.filter(function(user){
                        if(user.name.indexOf(self.searchWord) > -1 || user.email.indexOf(self.searchWord) > -1){
                            self.total++
                            return user
                        }
                    })
                }else{
                    self.total = self.totaldata.length
                    return self.userlist
                }
            }
        },
        methods:{
            getAllUser:function () {
                //console.log(this.count)
                this.axios.get('/usermgr').then(function (response) {
                        this.totaldata = response.data.users
                        this.total = parseInt(response.data.count[0]['count(*)'])
                        this.$message.success('获取成功！')
                        this.handleCurrentChange(1);
                    }.bind(this))
                    .catch(function (response) {
                        this.$message.error('获取失败！')
                    }.bind(this));
            },
            search(){
                this.is_search = true;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currpage = val
                var start = (val-1)*9
                var end = start + 8
                var templist = [];
                this.total = this.totaldata.length
                for(var i=0;i<this.total;i++){
                    if(i>=start && i<=end){
                        templist.push(this.totaldata[i])
                    }
                }
                this.userlist = templist
                //console.log(`当前页: ${val}`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleCommand:function (command) {
                if(command == 'batchdel'){
                    this.isbatch_delUser()
                }
            },
            addUser:function () {
                //数据检查
                var mymail=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
                if(this.addUserInfo.email == ''){
                    this.$message.error('请填写邮箱！')
                    return
                }
                if(!mymail.test(this.addUserInfo.email)){
                    this.$message.error('邮箱格式错误！')
                    return
                }
                var mytele=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(this.addUserInfo.tele != ''){
                    if(!mytele.test(this.addUserInfo.tele)){
                        this.$message.error('手机号码格式错误！')
                        return
                    }
                }
                if(this.addUserInfo.name == ''){
                    this.$message.error('请输入名称！')
                    return
                }

                //日期处理
                var day = this.moment(this.addUserInfo.birth).format("YYYY-MM-DD")

                var requestUrl = '/usermgr'
                this.axios.post(requestUrl,{
                    name:this.addUserInfo.name,
                    email:this.addUserInfo.email,
                    sex:this.addUserInfo.sex,
                    tele:this.addUserInfo.tele,
                    birth:day,
                    edu:this.addUserInfo.edu,
                    address:this.addUserInfo.address
                }).then(function (response) {
                    this.$message.success('添加成功！')
                    this.addUserInfo.name = ''
                    this.addUserInfo.email = ''
                    this.addUserInfo.sex = ''
                    this.addUserInfo.tele = ''
                    this.addUserInfo.birth = ''
                    this.addUserInfo.edu = ''
                    this.addUserInfo.address = ''
                }.bind(this))
                    .catch(function (response) {
                        this.$message.error('添加失败！')
                        this.$message.error(response)
                    }.bind(this));
                this.dialogAddFormVisible = false
            },
            iseditUser:function(row){
                this.dialogEditFormVisible = true
                this.user_row = row
                this.date_picker = this.user_row.birthday
            },
            editUser:function(){
                //数据检查
                var mytele=/^[1][3,4,5,7,8][0-9]{9}$/;
                if(this.user_row.telephone != null){
                    if(!mytele.test(this.user_row.telephone)){
                        this.$message.error('手机号码格式错误！')
                        return
                    }
                }
                if(this.user_row.name == ''){
                    this.$message.error('请输入名称！')
                    return
                }

                //日期处理
                var day = this.moment(this.date_picker).format("YYYY-MM-DD")

                var requestUrl = '/usermgr/'+this.user_row.id
                this.axios.patch(requestUrl,{
                    name:this.user_row.name,
                    sex:this.user_row.sex,
                    tele:this.user_row.telephone,
                    birth:day,
                    edu:this.user_row.education,
                    address:this.user_row.address
                }).then(function (response) {
                        console.log(response.data)
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
            isbatch_delUser:function(){
                var len = this.multipleSelection.length
                if(len != 0){
                    this.dialogBatchDeleteVisible = true
                    var str = ''
                    for (var i = 0; i < len; i++) {
                        str += this.multipleSelection[i].name+' '
                    }
                    this.the_deluser = str
                }else{
                    this.$message.warning('请选择要删除的用户！')
                }
            },
            batch_delUser:function () {
                var len =this.multipleSelection.length
                var requestUrl = ''
                if(len != 0){
                    for (var i = 0; i < len; i++) {
                        requestUrl = '/usermgr/'+ this.multipleSelection[i].id
                        this.axios.delete(requestUrl).then(function (response) {
                            this.del_result.push('1')
                        }.bind(this)).catch(function (response) {
                            //this.$message.error('删除失败！')
                            this.$message.error(response)
                            this.del_result.push('0')
                        }.bind(this))
                    }
                    for(var i = 0;i<this.del_result.length;i++){
                        if(this.del_result[i] == 0){
                            this.$message.error('删除失败！')
                            this.dialogBatchDeleteVisible = false
                            this.multipleSelection = []
                            this.del_result =[]
                            return;
                        }
                    }
                    this.$message.success('删除成功！')
                    this.dialogBatchDeleteVisible = false
                    this.multipleSelection = []
                    this.del_result =[]
                    this.refresh()
                }else{
                    this.$message.warning('请选择要删除的用户！')
                }
            },
            authorization:function(user){
                //console.log(user)
                this.curr_userid = user.id
                this.curr_roleid = user.role_id
                this.dialogAuthVisible = true
            },
            setRole:function(){

                if(this.rolename == '撤销角色'){
                    if(this.curr_roleid == null){
                        this.$message.error('当前用户没有角色！')
                        return
                    }
                }

                this.axios.post('/rolemgr/setRole',{
                    user_id:this.curr_userid,
                    role_name:this.rolename
                }).then(function (response) {
                        this.$message.success('操作成功！')
                    }.bind(this)).catch(function (response) {
                    this.$message.error('操作失败！')
                    this.$message.error(response)
                }.bind(this))
                this.dialogAuthVisible = false
                this.refresh();
            },
            disabledDate() {
                return false
            },
            refresh:function(){
                this.currpage = 1
                this.total=0
                this.totaldata=[]
                this.getAllUser()
            }
        },
        watch:{

        },
        filters : {

        }
    }
</script>

<style>
    .usermgr-handle-box{
        margin-bottom: 20px;
    }
    .search-input{
        float: right;
        width:200px;
    }
    .paging{
        float:right;
    }
    .pagination{
        padding-right: 0px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
    .setRole-text{
        font-size: 16px;
    }
</style>