<?php

namespace App\Http\Controllers;

use App\category;
use Illuminate\Http\Request;

class customController extends Controller
{
    public function index(){
        return view('frontEnd.master');
    }

    public function addcategory(Request $request){
        $cat_name = $request->validate([
            'cat_name' => 'required|unique:categories|max:100',
        ]);
        $category=new category();
        $category->cat_name=$request->cat_name;
        $save=$category->save();
        if ($save){
            return ['message'=>'Ok'];
        }

    }

    public function all_category(){
        $categories=category::all();
        return response()->json([
            'categories'=>$categories
            ],200);
    }
}
