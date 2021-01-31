import * as React from 'react';
import {useEffect} from "react";
import {DataGrid} from "@material-ui/data-grid";
import {CSVLink} from "react-csv";

export default function PlayerStatsDataTable() {

    const [rows, setRows] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [csvData, setCsvData] = React.useState([])

    const columns = [
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'team', headerName: 'Team', filterable: false},
        { field: 'position', headerName: 'Pos', filterable: false},
        { field: 'attempts', headerName: 'Att', filterable: false},
        { field: 'attempts_per_game', headerName: 'Att/G', filterable: false},
        { field: 'yards', headerName: 'Yds', filterable: false},
        { field: 'avg_yds_per_attempt', headerName: 'Avg', filterable: false},
        { field: 'avg_yds_per_game', headerName: 'Yds/G', filterable: false},
        { field: 'tds', headerName: 'TD', filterable: false},
        { field: 'long', headerName: 'Lng', filterable: false},
        { field: 'first_downs', headerName: '1st', filterable: false},
        { field: 'first_down_pct', headerName: '1st%', filterable: false},
        { field: 'twenty_plus', headerName: '20+', filterable: false},
        { field: 'forty_plus', headerName: '40+', filterable: false},
        { field: 'fumbles', headerName: 'FUM', filterable: false}
    ];

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:8100/api/players")
            .then(res => res.json())
            .then(
                (result) => {
                    setRows(result);

                    for (let [key, value] of Object.entries(result)) {
                        console.log(key);
                        let values = [];
                        for (let playerval of Object.values(value)) {
                            values.push("" + playerval.toString() + "");
                        }
                        csvData.push(values);
                    }
                    setCsvData(csvData);
                    setIsLoaded(true);

                }
            )
    }, [])


    if (isLoaded) {
        return (
            <div style={{height: 500, width: '100%', paddingTop: '2em'}}>
                {csvData.length > 0 ? <CSVLink filename={"my-file.csv"} data={csvData}>Download me</CSVLink> : null}
                <DataGrid rows={rows} columns={columns} pageSize={25}/>
            </div>
        )
    } else {
        return <div>Loading...</div>
    }


}