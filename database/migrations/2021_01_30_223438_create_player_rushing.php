<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayerRushing extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('player_rushing', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('team');
            $table->string('position');
            $table->integer('attempts');
            $table->float('attempts_per_game');
            $table->integer('yards');
            $table->float('avg_yds_per_attempt');
            $table->float('avg_yds_per_game');
            $table->integer('tds');
            $table->string('long');
            $table->integer('first_downs');
            $table->float('first_down_pct');
            $table->integer('twenty_plus');
            $table->integer('forty_plus');
            $table->integer('fumbles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('player_rushing');
    }
}
