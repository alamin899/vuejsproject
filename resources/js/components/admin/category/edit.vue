<!--<template>-->
    <!--<h1>Edit{{this.$route.params.categoryid}}</h1>-->
    <!--&lt;!&ndash;categoryid ai id ta mara route.js a path a jeta diye aschi setai dite hobe&ndash;&gt;-->
<!--</template>-->

<template>
    <div>
        <div class="col-md-3">
        </div>

        <div class="container-fluid col-md-6">

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Edit Category</h1>
            <span id="successcontent"></span>
            <form @submit.prevent="updatecategory()" id="categoryform">
                <div class="form-group " >
                    <input type="text" class="form-control" name="cat_name" v-model="form.cat_name"   placeholder="Enter Category" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                    <has-error :form="form" field="cat_name"></has-error>
                </div>
                <div class="">
                    <input type="submit" value="Update" class="btn btn-success">
                </div>
            </form>
        </div>

        <div class="col-md-3">

        </div>
    </div>





</template>

<script>
    export default {
        name: "edit",
        mounted(){
            axios.get(`/editcategory/${this.$route.params.categoryid}`)
                .then((response)=>{
                    this.form.fill(response.data.category)
                })

        },
        data(){
            return {
                form:new Form(
                    {
                        cat_name:''
                    }
                )
            }

        },
        methods:{
            updatecategory(){
                this.form.post(`/updatecategory/${this.$route.params.categoryid}`)
                    .then((response)=>{
                        this.$router.push('/categorylist')
                        toast.fire({
                            icon: 'success',
                            title: 'Category Updated successfully'+response.data.category
                        })
                        // $("#successcontent").append("<p style='color:green'>Succefully Inserted</p>").delay(5000).fadeOut('slow');
                    })
                    .catch(()=>{

                    })
            }

        }
    }
</script>

<style scoped>

</style>