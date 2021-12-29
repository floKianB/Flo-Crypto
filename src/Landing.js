import React, {useState, useEffect } from 'react';
import { getCoin } from './api';
import styles from "./Landing.module.css";
import Coin from "./Coin";

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => { 
        const fetchAPI = async() => {
            const data = await getCoin();
            console.log(data);
            setCoins(data)
        }
        fetchAPI();
    },[])

    const searchHandler = event => {
        setSearch(event.target.value);
    }
    const searchedCoins = coins.filter(coin => coin.name.includes(search))

    
    return (
        <>
        <div className={styles.main}>
            <div className={styles.headerContainer}>
                <input type="text" placeholder="Search" value={search} onChange={searchHandler}/>
            </div>
                <div className={styles.container}>
                            {
                                searchedCoins.map(coin => <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    marketCap={coin.market_cap}
                                    priceChange={coin.price_change_24h}
                                    />)
                            }
                        </div> 
            </div>
        </>
    );
};

export default Landing;