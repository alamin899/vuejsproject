import homcomponent from './components/admin/AdminHome.vue'
import categorylistcomponent from './components/admin/category/list'
import editCategory from './components/admin/category/edit'
import AddCategory from './components/admin/category/new'

// post import
import poscomponent from './components/admin/post/list'
import AddPost from './components/admin/post/new'
import editpost from './components/admin/post/edit'
export const routes=[
    {
        path:'/homepage',
        component:homcomponent
    },

    {
        path:'/categorylist',
        component:categorylistcomponent
    },
    {
        path:'/add-category',
        component:AddCategory
    },
    {
        path:'/edit-category/:categoryid',
        component:editCategory
    },

    // post route

    {
        path:'/post',
        component:poscomponent
    },
    {
        path:'/add-post',
        component:AddPost
    },
    ,{
    path:'/editpost/:postid',
        component:editpost
    }



]