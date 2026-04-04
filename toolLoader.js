import fs from "fs";

const loadTools = async () => {
    const files = fs.readdirSync("tools");
    const tools = {};

    for (const file of files) {
        if (!file.endsWith(".js")) continue;

        const toolName = file.replace(".js", "");
        const module = await import(`./tools/${file}`);

        tools[toolName] = {
            fn: module[toolName],
            meta: module.meta
        };
    }
    console.log(tools)
    return tools;
};



export default loadTools;