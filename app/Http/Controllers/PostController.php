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
}
