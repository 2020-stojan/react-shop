import React, { useState, useEffect } from 'react'
import Card from '../Components/Card/component'
import data from '../TestData/index.json'

const Home = ({ searchVal }) => {

    const [items, setItems] = useState([]);

    useEffect(
        () => {
            var niz = [];
            data.forEach(element => {
                if (element.name.toUpperCase().indexOf(searchVal.toUpperCase()) > -1) {
                    niz.push(element);
                }
            });
            setItems(niz);
            return () => { };
        },
        [searchVal]
    );

    return (
        <div className='container'>
            <div className="columns is-multiline">
                {
                    items.map((item) => (

                        <div className="column is-one-quarter" key={item.id}>
                            <Card item={item} />
                        </div>
                    ))
                }
            </div>
        </div >


    )
}

export default Home;