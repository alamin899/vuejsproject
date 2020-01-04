<template>
    <div>
        <div class="col-md-3">
        </div>

        <div class="container-fluid col-md-6">

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Add Category</h1>
            <span id="successcontent"></span>
            <form @submit.prevent="addcategory()" id="categoryform">
                <div class="form-group " >
                    <input type="text" class="form-control" name="cat_name" v-model="form.cat_name"   placeholder="Enter Category" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                    <has-error :form="form" field="cat_name"></has-error>
                </div>
                <div class="">
                    <input type="submit" value="Submit" class="btn btn-success">
                </div>
            </form>
        </div>

        <div class="col-md-3">

        </div>
    </div>





</template>

<script>
    export default {
        name: "new",
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
            addcategory(){
                this.form.post('/addcategory')
                    .then((response)=>{
                        this.$router.push('/categorylist')
                        toast.fire({
                            icon: 'success',
                            title: 'Category Inserted successfully'
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