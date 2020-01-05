<?php

namespace App\Http\Controllers;

use App\post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function post(){
        $post=post::all();
        return $post;
    }
}
