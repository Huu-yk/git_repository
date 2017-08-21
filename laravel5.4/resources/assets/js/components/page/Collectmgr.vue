<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="fa fa-star-o"></i> 收藏管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="collectmgr-handle-box" :inline="true" >
            <el-button :plain="true" type="success" class="refresh_btn" @click="refresh">
                刷新
            </el-button>
        </div>
        <el-table :data="collectdata" border>
            <el-table-column prop="user_name" label="用户名称" width="150"></el-table-column>
            <el-table-column prop="movie_name" label="电影名称" width="150"></el-table-column>
            <el-table-column prop="collect_time" label="收藏时间" ></el-table-column>
            <el-table-column label="操作" width="120">
                <template scope="scope">
                    <el-button size="small" :plain="true" type="danger" @click="isdelCollect(scope.row.id)">取消收藏</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collectdata:[],
            }
        },
        created:function () {
            this.getAllCollects()
        },
        methods:{
            getAllCollects:function () {
                this.axios.get('/collectmgr/getAllCollects')
                    .then(function (response) {
                        this.collectdata = response.data
                        this.$message.success('获取成功！')
                    }.bind(this)).catch(function (response) {
                    console.log(response)
                    this.$message.error('获取失败！')
                }.bind(this))
            },
            isdelCollect:function (id) {
                this.$confirm('确定取消该收藏？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('/collectmgr/delCollect_be',{
                        collectid:id,
                    }).then(function (response) {
                        if(response.data == null || response.data == ''){
                            this.$message({
                                type: 'success',
                                message: '操作成功!'
                            })
                        }else{
                            this.$message.error('操作失败！')
                        }
                    }.bind(this)).catch(function (response) {
                        console.log(response)
                        this.$message({
                            type: 'error',
                            message: '操作失败!'
                        })
                    }.bind(this))
                }).catch(() => {

                })
            },
            refresh:function () {
                this.getAllCollects()
            }
        },
        watch:{

        },
        filters:{

        }
    }
</script>

<style>
    .collectmgr-handle-box{
        margin-bottom: 20px;
    }
    .refresh_btn{
        margin-left:0px !important;
    }
</style>