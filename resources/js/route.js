import homcomponent from './components/admin/AdminHome.vue'
import poscomponent from './components/admin/Post.vue'
import categorylistcomponent from './components/admin/category/list'
import editCategory from './components/admin/category/edit'
import AddCategory from './components/admin/category/new'
export const routes=[
    {
        path:'/homepage',
        component:homcomponent
    },
    {
        path:'/post',
        component:poscomponent
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




]