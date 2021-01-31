<?php

namespace App\Console\Commands;

use App\Models\Player;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RefreshDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh database to remove user changes from production server';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('migrate:fresh');

        $data = json_decode(file_get_contents(__DIR__ . '/../../../resources/data/rushing.json'), true);


        foreach ($data as $player) {
            Player::create([
                'name'                  => $player['Player'],
                'team'                  => $player['Team'],
                'position'              => $player['Pos'],
                'attempts'              => $player['Att'],
                'attempts_per_game'     => $player['Att/G'],
                'yards'                 => str_replace(",", "", $player['Yds']),
                'avg_yds_per_attempt'   => $player['Avg'],
                'avg_yds_per_game'      => $player['Yds/G'],
                'tds'                   => $player['TD'],
                'long'                  => $player['Lng'],
                'first_downs'           => $player['1st'],
                'first_down_pct'        => $player['1st%'],
                'twenty_plus'           => $player['20+'],
                'forty_plus'            => $player['40+'],
                'fumbles'               => $player['FUM']
            ]);
        }
    }
}
