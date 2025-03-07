import API from "./base";

export const getData = async (params: any) => {
    const response = await API.get("/home/search", 
        {params}
    );
    return response.data;
}