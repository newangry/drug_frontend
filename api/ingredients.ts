import API from "./base";

export const getData = async (params: any) => {
    const response = await API.get("/ingredients/get-data",
        { params }
    );
    return response.data;
}