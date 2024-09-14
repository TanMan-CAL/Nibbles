import React, { useEffect, useState } from "react";
import Axios from 'axios';

const Front = () => {
    const [grids, setGrids] = useState([]);  // State to store fetched data
    const [loading, setLoading] = useState(true);  // State for tracking loading

    useEffect(() => {
        // Fetch data when the component mounts
        Axios.get('http://localhost:5001/grid')
            .then((res) => {
                setGrids(res.data);  // Update state with fetched data
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch((err) => {
                console.error('Error fetching grids:', err);
                setLoading(false);  // Set loading to false even on error
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;  // Show loading message while fetching data
    }

    return (
        <div>
            {grids && grids.length > 0 ? (
                grids.map((grid) => <h1 key={grid.boxno}>{grid.boxno} {grid.value}</h1>)
            ) : (
                <h1>No grids available</h1>  // Show this if no data is found after loading
            )}
        </div>
    );
};

export default Front;
