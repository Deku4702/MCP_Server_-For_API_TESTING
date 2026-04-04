import axios from "axios";

export async function analyze(url) {
    
    try {
        const res = await axios.get(url);

        if(!res.data){
            return({
                error : "Error on valid data"
            });
        }

    const type = (Array.isArray(res.data) === true) ? "array" : typeof res.data;
    
    if(type === "array"){
        return{
            type : "array",
            length : res.data.length
        }
    }

    return{
            type : type,
            length : Object.keys(res.data).length,
            data: res.data
        };
     
        
        
    } catch (error) {
        return{
            error : error.message
        };
    }
}

export const meta = {
    name: "analyze",
    description: "Analyze API response type and length",
    params: ["url"]
};