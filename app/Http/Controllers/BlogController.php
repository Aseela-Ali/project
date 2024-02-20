<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blogs;

class BlogController extends Controller
{
    function blog(Request $req){
        $blog = new Blogs;
        $blog->title = $req->input("title");
        $blog->body = $req->input("body");
        $blog->author = $req->input("author");
        $blog->save();

        return response()->json($blog, 201);
    }
    function list(){
        return Blogs :: all();
    }
} 
