<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-info-circle"></i> 评论管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="commentmgr-handle-box" :inline="true" >
            <el-button :plain="true" type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
        </div>
        <el-table :data="commentsdata" border>
            <el-table-column prop="user_name" label="用户名称" width="150"></el-table-column>
            <el-table-column prop="movie_name" label="电影名称" width="150"></el-table-column>
            <el-table-column prop="content" label="评论内容" ></el-table-column>
            <el-table-column prop="posted_time" label="发表时间" width="200"></el-table-column>
            <el-table-column label="操作" width="120">
                <template scope="scope">
                    <el-button size="small" :plain="true" type="danger" @click="isdelComment(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                commentsdata:[],
            }
        },
        created:function () {
            this.getAllComments()
        },
        methods:{
            getAllComments:function () {
                this.axios.get('/commentmgr/getAllComments')
                    .then(function (response) {
                    this.commentsdata = response.data
                    this.$message.success('获取成功！')
                }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('获取失败！')
                }.bind(this))
            },
            isdelComment:function (id) {
                this.$confirm('确定删除该评论？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('commentmgr/delComment_be',{
                        commentid:id,
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
                this.getAllComments()
            }
        },
        watch:{

        },
        filters:{

        }
    }
</script>

<style>
    .commentmgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
</style>