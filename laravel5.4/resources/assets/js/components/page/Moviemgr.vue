<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-video-camera"></i> 电影管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="moviemgr-handle-box" :inline="true" >
            <el-button :plain="true" type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
        </div>
        <el-table :data="moviedata" border>
            <el-table-column prop="name" label="片名" width="120"></el-table-column>
            <el-table-column prop="tag_name" label="标签" width="120"></el-table-column>
            <el-table-column prop="running_time" label="片长(分钟)" width="120" ></el-table-column>
            <el-table-column prop="area" label="地区" ></el-table-column>
            <el-table-column prop="star" label="星级" ></el-table-column>
            <el-table-column prop="release_time" label="上映时间" width="120" ></el-table-column>
            <el-table-column label="操作" width="280">
                <template scope="scope">
                    <el-button size="small" :plain="true" type="info" @click="iseditMovie(scope.row)">编辑</el-button>
                    <el-button size="small" :plain="true" type="danger" @click="isdeleteMovie(scope.row.id)">删除</el-button>
                    <el-button size="small" :plain="true" type="warning" @click="isintroduce(scope.row.introduce)">简介</el-button>
                    <el-button size="small" :plain="true" type="success" @click="isuploadImg(scope.row.id)">上传图片</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog title="编辑电影" :visible.sync="dialogEditMovieVisible">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="片名">
                            <el-input style="width:200px" v-model="editMovieInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="标签">
                            <el-select v-model="editMovieInfo.tag_name" style="width:200px">
                                <el-option value="Tag1">Tag1</el-option>
                                <el-option value="Tag2">Tag2</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="地区">
                            <el-input style="width:200px" v-model="editMovieInfo.area"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="上映">
                            <el-date-picker
                                    v-model="editMovieInfo.release_time"
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
                        <el-form-item label="星级">
                            <el-input style="width:200px" v-model="editMovieInfo.star"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="片长">
                            <el-input style="width:200px" v-model="editMovieInfo.running_time"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="22">
                        <el-form-item label="uri">
                            <el-input style="width:467px" v-model="editMovieInfo.uri"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="22">
                        <el-form-item label="简介">
                            <el-input style="width:467px" type="textarea" :rows="3" v-model="editMovieInfo.introduce"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEditMovieVisible = false">取 消</el-button>
                <el-button type="primary" @click="editMovie">确 定</el-button>
            </div>
        </el-dialog>



        <el-dialog title="电影简介" :visible.sync="dialogIntroduceVisible">
            <div>
                <p>{{introducetext}}</p>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogIntroduceVisible = false">取 消</el-button>
                <el-button type="primary" @click="editMovie">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog title="上传电影图片" :visible.sync="dialogUploadImgVisible">
            <el-form>
                <el-row>
                    <el-col :span="22">
                        <el-form-item>
                            <el-upload
                                    action="upload/uploadPhoto"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-error="handleError"
                                    :on-success="handleSuccess"
                                    :on-remove="handleRemove"
                                    name="moviePhoto">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog v-model="dialogVisible" size="tiny">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                    </el-col>

                </el-row>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogUploadImgVisible = false">取 消</el-button>
                <el-button type="primary" @click="uploadImg">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //基础数据
                moviedata:[],

                //编辑电影
                editMovieInfo:[],

                //模态框状态
                dialogEditMovieVisible:false,
                dialogIntroduceVisible:false,
                dialogUploadImgVisible:false,

                //查看简介
                introducetext:'',

                files: [],
                dialogImageUrl: '',
                dialogVisible: false,
                photolist:[],
                movieid:'',
            }
        },
        created:function () {
            this.getAllmovies()
        },
        computed:{

        },
        methods:{
            getAllmovies:function(){
                this.axios.get('/moviemgr').then(function (response) {
                    this.moviedata = response.data
                    this.$message.success('获取成功！')
                }.bind(this))
                    .catch(function (response) {
                        this.$message.error('获取失败！')
                    }.bind(this));
            },
            iseditMovie:function(row){
                this.editMovieInfo = row
                this.dialogEditMovieVisible = true
            },
            editMovie:function(){
                //数据检查
                if(this.editMovieInfo.name == "" || this.editMovieInfo.name == null){
                    this.$message.warning('请输入片名！')
                    return
                }
                if(this.editMovieInfo.tag_name == "" || this.editMovieInfo.tag_name == null){
                    this.$message.warning('请选择标签！')
                    return
                }
                if(isNaN(this.editMovieInfo.running_time)){
                    this.$message.warning('片长必须为数字！')
                    return
                }
                if(this.editMovieInfo.area == "" || this.editMovieInfo.area == null){
                    this.$message.warning('请输入地区！')
                    return
                }
                if(this.editMovieInfo.release_time == "" || this.editMovieInfo.release_time == null){
                    this.$message.warning('请选择上映时间！')
                    return
                }

                //日期处理
                var release_date = this.editMovieInfo.release_time
                var day = this.moment(release_date).format("YYYY-MM-DD")

                this.axios.post('moviemgr/editMovie',{
                    id:this.editMovieInfo.id,
                    name:this.editMovieInfo.name,
                    tag_name:this.editMovieInfo.tag_name,
                    area:this.editMovieInfo.area,
                    release_time:day,
                    star:this.editMovieInfo.star,
                    uri:this.editMovieInfo.uri,
                    running_time:this.editMovieInfo.running_time,
                    introduce:this.editMovieInfo.introduce,
                }).then(function (response) {
                    this.$message.success('编辑成功！')
                    this.dialogEditMovieVisible = false
                    this.getAllmovies()
                }.bind(this)).catch(function (response) {
                    this.$message.error('编辑失败！')
                    console.log(response)
                }.bind(this))

            },
            isdeleteMovie:function (id) {
                this.$confirm('确定删除该电影？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('moviemgr/deleteMovie',{
                        movieid:id,
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
            isintroduce:function(text){
                this.introducetext = text
                this.dialogIntroduceVisible = true
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSuccess(response,file,filelist){
                this.$message.success('上传成功！')
                this.photolist.push(file.name)
            },
            handleError(err,file,filelist){
                this.$message.error('上传失败！')
                console.log(err)
                console.log(file)
                console.log(filelist)
            },
            isuploadImg:function(id){
                this.movieid = id
                this.dialogUploadImgVisible = true
            },
            uploadImg:function(){
                this.axios.post('moviemgr/uploadImg',{
                    movieid:this.movieid,
                    photolist:this.photolist
                }).then(function (response) {
                    console.log(response)
                    this.$message.success('操作成功！')
                    this.photolist = []
                    this.files = []
                    this.dialogImageUrl = ''
                    this.dialogVisible = false
                }.bind(this)).catch(function (response) {
                    this.$message.error('操作失败！')
                    console.log(response)
                }.bind(this))

                this.dialogUploadImgVisible = false
            },
            disabledDate:function(){
              return false
            },

            refresh:function () {
                this.getAllmovies()
            }
        },
        watch:{

        },
        filters:{

        }
    }
</script>

<style>
    .moviemgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
</style>