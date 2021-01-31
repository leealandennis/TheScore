import {Typography} from "@material-ui/core";
import React from "react";

export default function Title() {
    return (
        <div>
            <Typography variant="h2" align="center" style={{paddingTop: "1em"}}>
                Welcome to The Score!
            </Typography>
            <Typography variant="h4" align="center" style={{paddingTop: "1em"}}>
                The home of pro football stats
            </Typography>
        </div>
    )
}