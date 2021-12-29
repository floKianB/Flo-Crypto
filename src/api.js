import axios from "../../node_modules/axios";

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=250&page=1&sparkline=false";

const getCoin = async() => {
    const response = await axios.get(url);
    return response.data;
}
export {getCoin}