<template>
    <div >
        <div class="card-header">
            <div class="text-right">
                <button class="card-tools btn btn-primary" >
                <router-link to="/add-category" style="color:white;text-decoration: none">
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
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr v-for="(category,index) in getallCategory" :key="category.id">
                        <td>{{index+1}}</td>
                        <td>{{category.cat_name}}</td>
                        <td>{{category.created_at | timeformat}}</td>
                        <td>
                            <router-link :to="`/edit-category/${category.id}`" class="btn btn-primary btn-sm">Edit</router-link>
                            <a href="" @click.prevent="deletecategory(category.id)"  class="btn btn-danger btn-sm">Delete</a>
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
            this.$store.dispatch("allCategory")

        },
        computed:{

            getallCategory(){
               return this.$store.getters.getCategory
            }
        },
        methods:{
            deletecategory(id){
            if(confirm("Do you really want to delete?")){
               axios.get('/deletecategory/'+id)
                   .then(()=>{
                       // this.$router.push('/categorylist')
                       this.$store.dispatch("allCategory")
                       toast.fire({
                           icon: 'warning',
                           title: 'Category deleted successfully'
                       })
                   })
                   }
            }
        }
    }
</script>

<style scoped>

</style>