<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/blogpost','PostController@post');

Route::get('/homepage', 'customController@index')->name('bd');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
//Route::get('/{anypath}','customController@index')->where('path','.*');

//Category
Route::post('addcategory','customController@addcategory')->name('addcategory');
Route::get('/category','customController@all_category');
//delete category
Route::get('/deletecategory/{id}','customController@delete');

//edit category for view click data
Route::get('/editcategory/{id}','customController@editviewdata');
Route::post('/updatecategory/{id}','customController@updatecategory');
