import homcomponent from './components/admin/AdminHome.vue'
import categorylistcomponent from './components/admin/category/list'
import editCategory from './components/admin/category/edit'
import AddCategory from './components/admin/category/new'
// For Post
import postcomponent from './components/admin/post/list'

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

    // For Post
    {
        path:'/post',
        component:postcomponent
    },




]