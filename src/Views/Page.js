import React, { useState, useEffect } from 'react';
import data from '../TestData/index.json'

const Page = ({ match }) => {

    // State se bavi manipulacijom podataka u okviru komponente
    // state cuva trenutno stanje podataka.
    // setState je funkcija koja menja vrednost podataka.
    // da bi state koristili unutar funkcionalne kompoentne pozivamo useState
    // const [state,setState] = useState({
    //     ime : "Perica",
    //     god : 20
    // })

    // poziv
    // setState({ god : 40 });
    // unutar JSX -> state.god

    // za pojedinacni podatak mozemo definisati naziv state-a i naziv funkcije
    // koja menja state po slobodnom izboru
    const [item, setItem] = useState({});
    const [kolicina, setKolicina] = useState(1);

    useEffect(
        () => {
            data.forEach(element => {
                if (element.id == match.params.id) {
                    setItem(element)
                }
            });
            return () => { };
        },
        []
    );

    function dodaj() {
        setKolicina(kolicina + 1);
    }
    return (
        <div>
            <h1>{item.name}</h1>
            <h2>Kolicina {kolicina}</h2>
            <button onClick={dodaj}>+</button>
            <hr />
            <img src={item.image} alt="" srcset="" />
        </div>

    )
}

export default Page;


class Proba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            broj: 10
        }
    }

    promeniBroj(uvecanje) {
        this.setState({
            broj: this.state.broj++
        })
    }
}