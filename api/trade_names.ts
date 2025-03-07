import API from "./base";

export const getData = async (params: any) => {
    const response = await API.get("/trade-names/get-data",
        { params }
    );
    return response.data;
}