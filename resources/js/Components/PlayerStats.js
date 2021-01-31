import {Typography} from "@material-ui/core";
import React from "react";
import PlayerStatsDataTable from "./PlayerStatsDataTable";

export default function PlayerStats() {
    return (
        <div>
            <Typography variant="h2" align="center" style={{paddingTop: "1em"}}>
                Player Rushing Stats
            </Typography>
            <PlayerStatsDataTable />
        </div>
    )
}