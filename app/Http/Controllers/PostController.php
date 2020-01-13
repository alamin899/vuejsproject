<?php

namespace App\Http\Controllers;

use App\post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all_post(){
        $posts=post::orderBy('id', 'DESC')->get();
        return response()->json([
            'posts'=>$posts
        ],200);
    }

    public function addpost(Request $request){
//        $cat_name = $request->validate([
//            'cat_name' => 'required|unique:categories|max:100',
//        ]);
        $post=new post();
        $post->cat_id=$request->cat_id;
        $post->title=$request->title;
        $post->description=$request->description;
        $save=$post->save();
        if ($save){
            return ['message'=>'Ok'];
        }

    }
    public function updatepostdata($id){
        $singlepost=post::find($id);
        return response()->json([
            'post'=>$singlepost
        ],200);
    }

    public function updatepost(Request $request,$id){
        post::where("id", $id)->update([
            "cat_id" => $request->cat_id,
            "title"=>$request->title,
            "description"=>$request->description
        ]);
    }

    public function delete($id){
        $delete=post::find($id);
        $delete->delete();
    }
}
