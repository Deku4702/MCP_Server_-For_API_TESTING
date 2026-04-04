import express from "express";
import loadTools from "../toolLoader.js";


const router = express.Router();

router.post('/mcp', async (req,res) => {
    
    const {tool, task, url} = req.body;


    if ((!tool && !task) || !url) {
    return res.status(400).json({
        error: "Either tool or task, and url are required"
    });
}
try {
    const tools = await loadTools();

    let selectedTool = tool;

    if (!selectedTool && task) {
        const words = task.toLowerCase().split(" ");

        const match = Object.values(tools).find(t => {
            const desc = t.meta.description.toLowerCase();
            return words.some(word => desc.includes(word));
        });

        selectedTool = match?.meta.name;
    }

    console.log("FINAL SELECTED TOOL:", selectedTool);

    const fn = tools[selectedTool]?.fn;

    if (!fn) {
        return res.status(400).json({
            error: "No matching tool found"
        });
    }

    const result = await fn(url);

    return res.json({
        success: true,
        tool: selectedTool,
        data: result
    });

} catch (error) {
    return res.status(500).json({
        error: error.message
    });
}
})

router.post('/tools', async (req,res) => {
    try {

        const tools = await loadTools();

        const toolList = Object.values(tools).map(t => t.meta);

        return res.json(toolList);
        
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
})

export default router;