import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Chart from './Chart'
import '../Styles/Graph.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        background: "white"
    },
    label: {
        color: "white"
    },
    value: {
        backgrounColor: "white"
    }
}));

const Graph = (props) => {
    const classes = useStyles();
    const [dataYear, setDataYear] = useState(2015)

    const { title, stats } = props.data

    const handleChange = (e) => {
        setDataYear(e.target.value)
    }

    return (
        <div className="Graph">
            <div className="Graph-header">
                <h1>{title}</h1>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label" className={classes.label}>Year</InputLabel>
                    <Select
                        labelId="simple-select-outlined-label"
                        id="simple-select-outlined"
                        value={dataYear}
                        onChange={handleChange}
                        label="Year"
                    >
                        <MenuItem value="" className={classes.value}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={2015}>2015</MenuItem>
                        <MenuItem value={2016}>2016</MenuItem>
                        <MenuItem value={2017}>2017</MenuItem>
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="Graph-chart">
                <Chart stats={stats} title={title} dataYear={dataYear} />
            </div>
        </div>
    )

}

export default Graph;
