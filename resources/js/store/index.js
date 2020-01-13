export default {
    state:{
        category:[],
        post:[],
    },
    getters:{
        getCategory(state){
            return state.category
        },
        getPost(state){
            return state.post
        }

    },
    actions:{
        allCategory(context){
            axios.get('/category')
                .then((response)=>{
                    // console.log(response.data.categories)
                    context.commit('categories',response.data.categories)
                })
        },
        allPost(context){
            axios.get('/post')
                .then((response)=>{
                    // console.log(response.data.categories)
                    context.commit('post',response.data.posts)//posts from controller
                })
        }

    },
    mutations: {
        categories(state,data){
            return state.category=data
        },
        post(state,data){
            return state.post=data
        }
    }
}