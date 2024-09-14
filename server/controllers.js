import PostGrid from "./schema.js"; // mongodb schema for collection database
import mongoose from "mongoose";


export const fetchGrid = async (req, res)=> { // callback function for when someone access the server
    try {
        const getGrid = await PostGrid.find(); //
        console.log(getGrid);
        res.status(200).json(getGrid);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createGrid =  async (req, res) => {
    const grid = req.body;
    const newGrid = new PostGrid(post);
    try {
        await newGrid.save();
        res.status(201).json(newGrid); //success code
    } catch {
        res.status(409).json({message: error.message});
    }
}



export const updateGrid = async (req, res) => {
    const { id: _id } = req.params;
    const grid = req.body; // sent from front-end

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
    // checking if id passed is actually a mongoose type

    const updatedGrid = await PostGrid.findByIdAndUpdate(_id, {...grid, _id}, { new: true });
    // get updated version of post
    res.json(updatedGrid);
}