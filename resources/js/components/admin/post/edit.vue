<template>
    <div>
        <div class="col-md-3">
        </div>

        <div class="container-fluid col-md-6">

            <!-- Page Heading -->
            <h1 class="h3 mb-4 text-gray-800">Edit Post</h1>
            <span id="successcontent"></span>
            <form @submit.prevent="editpost()" id="editpost">
                <div class="form-group " >
                    <lavel for="#posttitle">Post Title</lavel>
                    <input type="text" class="form-control" name="title" v-model="form.title"   placeholder="Enter Title" :class="{ 'is-invalid': form.errors.has('title') }" id="posttitle">
                    <has-error :form="form" field="title"></has-error>
                </div>

                <div class="form-group " >
                    <lavel for="#category">Category</lavel>
                    <select  id="category" class="form-control" v-model="form.cat_id">
                        <option disabled value="">Please select one</option>
                        <option :value="category.id" v-for="category in getallcategory ">{{category.cat_name}}</option>

                    </select>
                    <!--<input type="text" class="form-control" name="title" v-model="form.title"   placeholder="Enter Title" :class="{ 'is-invalid': form.errors.has('title') }" >-->
                    <has-error :form="form" field="cat_id"></has-error>
                </div>

                <div class="form-group " >
                    <lavel for="#posttitle">Post Description</lavel>
                    <textarea class="form-control" v-model="form.description" name="description" placeholder="Add Post Descriptions"></textarea>
                    <!--<input type="text" class="form-control" name="title" v-model="form.title"   placeholder="Enter Title" :class="{ 'is-invalid': form.errors.has('title') }" id="posttitle">-->
                    <has-error :form="form" field="title"></has-error>
                </div>

                <div class="">
                    <input type="submit" value="Submit" class="btn btn-primary btn-block">
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
            axios.get(`/updatepostdata/${this.$route.params.postid}`)//${this.$route.params.categoryid this part from vue route
                .then((response)=>{
                    console.log("hr")
                    this.form.fill(response.data.post)
                }),
                this.$store.dispatch("allCategory")

        },
        data(){
            return {
                form:new Form(
                    {
                        cat_id:'',
                        title:'',
                        description:''
                    }
                )
            }

        },

        computed:{
            getallcategory(){
                return this.$store.getters.getCategory

            }
        },
        methods:{
            editpost(){
                this.form.post(`/updatepost/${this.$route.params.postid}`)
                    .then((response)=>{
                        this.$router.push('/post')
                        toast.fire({
                            icon: 'success',
                            title: 'Post Updated successfully'
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