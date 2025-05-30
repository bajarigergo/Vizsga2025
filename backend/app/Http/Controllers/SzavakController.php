<?php

namespace App\Http\Controllers;

use App\Models\szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    //
    public function index(){
        $szavak = szavak::all();

        return response()->json($szavak);
    }

    public function getTemaval(){
        $szavak = DB::table('szavaks as sz')
        ->join('temas as t','sz.temaId', '=','t.id')
        ->select('sz.angol','sz.magyar','sz.temaId','t.temanev',)
        ->get();

        return response()->json($szavak);
        
    }
}
