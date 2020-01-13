<template>
    <div >
        <div class="card-header">
            <div class="text-right">
                <button class="card-tools btn btn-primary" >
                    <router-link to="/add-post" style="color:white;text-decoration: none">
                        Add Category
                    </router-link>
                </button>

            </div>
        </div>

        <div class=" card-body text-center ">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr v-for="(post,index) in getallpost" :key="post.id">
                        <td>{{index+1}}</td>
                        <td>{{post.title}}</td>
                        <td>{{post.description | sortlength(30,"......More")}}</td>
                        <td>{{post.created_at | timeformat}}</td>
                        <td>
                            <a href="" class="btn btn-primary btn-sm">Edit</a>
                            <a href=""  class="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>



                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        mounted(){
            this.$store.dispatch("allPost")

        },
        computed:{

            getallpost(){
                return this.$store.getters.getPost
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>