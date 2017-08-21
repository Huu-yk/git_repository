<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-user"></i> 电影管理</el-breadcrumb-item>
                <el-breadcrumb-item>上传电影</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="uploadForm">
            <el-form  label-width="80px">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="片名">
                            <el-input style="width:300px" v-model="addMovieInfo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="标签">
                            <el-select v-model="addMovieInfo.tag_name" style="width:300px">
                                <el-option value="Tag1">Tag1</el-option>
                                <el-option value="Tag2">Tag2</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="地区">
                            <el-input style="width:300px" v-model="addMovieInfo.area"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="上映">
                            <el-date-picker
                                    v-model="addMovieInfo.release_time"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="disabledDate"
                                    style="width:300px">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="10">
                        <el-form-item label="片长">
                            <el-input style="width:300px" v-model="addMovieInfo.running_time"></el-input>
                        </el-form-item>
                    </el-col>

                   <el-col :span="12">
                       <el-form-item label="简介">
                           <el-input style="width:300px" type="textarea" :rows="2" v-model="addMovieInfo.introduce"></el-input>
                       </el-form-item>
                   </el-col>
               </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="星级">
                            <div class="block">
                                <el-rate
                                        v-model="addMovieInfo.star"
                                        :allow-half="true"
                                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item>
                            <el-button type="reset">重 置</el-button>
                            <el-button type="primary" @click="addMovie">提 交</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
               <el-row>
                   <el-col :span="10">
                       <el-form-item label="图片">
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
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                value2: null,
                value3:null,
                files: [],
                dialogImageUrl: '',
                dialogVisible: false,
                photolist:[],

                addMovieInfo:{
                    name:'',
                    tag_name:'',
                    area:'',
                    running_time:'',
                    release_time:'',
                    star:0,
                    introduce:'',
                },

            }
        },
        created:function () {

        },
        computed:{

        },
        methods:{
            disabledDate() {
                return false
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
            addMovie(){
                //数据检查
                if(this.addMovieInfo.name == "" || this.addMovieInfo.name == null){
                    this.$message.warning('请输入片名！')
                    return
                }
                if(this.addMovieInfo.tag_name == "" || this.addMovieInfo.tag_name == null){
                    this.$message.warning('请选择标签！')
                    return
                }
                if(isNaN(this.addMovieInfo.running_time)){
                    this.$message.warning('片长必须为数字！')
                    return
                }
                if(this.addMovieInfo.area == "" || this.addMovieInfo.area == null){
                    this.$message.warning('请输入地区！')
                    return
                }
                if(this.addMovieInfo.release_time == "" || this.addMovieInfo.release_time == null){
                    this.$message.warning('请选择上映时间！')
                    return
                }

                //日期处理
                var release_date = this.addMovieInfo.release_time
                var day = this.moment(release_date).format("YYYY-MM-DD")

                this.axios.post('moviemgr/addMovie',{
                    name:this.addMovieInfo.name,
                    tag_name:this.addMovieInfo.tag_name,
                    area:this.addMovieInfo.area,
                    release_time:day,
                    star:this.addMovieInfo.star,
                    running_time:this.addMovieInfo.running_time,
                    introduce:this.addMovieInfo.introduce,
                    photolist:this.photolist
                }).then(function (response) {
                    this.$message.success('添加成功！')
                }.bind(this)).catch(function (response) {
                    this.$message.error('添加失败！')
                    console.log(response)
                }.bind(this))
            },
        },
        watch:{

        },
        filters:{

        }
    }
</script>

<style>
    .uploadForm{
        margin-top: 30px;
    }
    .el-rate{
        margin-top:8px !important;;
    }
</style>