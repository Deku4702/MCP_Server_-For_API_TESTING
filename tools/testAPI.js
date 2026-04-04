import axios from "axios";

export async function testAPI(url) {
    const start = Date.now();
    try {
        const res = await axios.get(url);
        const end = Date.now();
        const time = end - start;

        return {
            status: res.status,
            time : time + "ms",
            success : true,
            data: Array.isArray(res.data) ? res.data.slice(0,5) : res.data
        };
    } catch (error) {
        const end = Date.now();
        const time = end - start;
        return {
            status: error.response?.status || 500,
            time : time + "ms",
            success : false,
            error: error.message
        };
    }
    
}

export const meta = {
    name: "testAPI",
    description: "Testing Your API's response rate",
    params: ["url"]
};
