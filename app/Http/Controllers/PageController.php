<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index() 
    {
        return response()->json(Page::all());
    }


    public function show($id)
    {
        return response()->json(Page::findOrFail($id));
    }

    public function update(Request $request, $id) {
        $page = Page::findOrFail($id);
        $page->update($request->all());
        return response()->json($page);
    }

    public function destroy($id)
    {
        Page::findOrFail($id)->delete();
        return response()->json(['message' => 'الصفحه اتمسحت ']);
    }
}
