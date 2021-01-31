<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PlayerController extends Controller
{

    /**
     * @param Request $request
     * @return Player[]|Collection
     */
    public function index()
    {
        return Player::all();
    }

}