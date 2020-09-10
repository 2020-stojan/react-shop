import React, { useState } from 'react'
import Card from '../Components/Card/component'
// import { useEffect } from 'react';


const Admin = () => {


    // const [imeInputPolja, promenaImenaInputPolja] = useState("probaNeka");
    // const [tipInputPolja, promenaTipaInputPolja] = useState("text");

    const [fields, setFields] = useState([
        { name: "name", type: "text" },
        { name: "price", type: "number" },
        { name: "tip", type: "text" },
        { name: "image", type: "text" },
        { name: "description", type: "textarea" },
        // { name: "email", type: "email" }
    ]);

    const [item, setItem] = useState({
        name: "proba",
        tip: "bezveze",
        price: 100,
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        descrition: ""

    });

    const handleChange = (event) => {
        let polje = event.target.name;
        let tempItem = item;
        tempItem[polje] = event.target.value;
        console.log(tempItem);
        setItem((prevState) => ({
            ...prevState,
            tempItem
        }));
    }

    // const potvrda = () => {
    //     let f = fields;
    //     f.push({ name: imeInputPolja, type: tipInputPolja });
    //     console.log(f);
    //     setFields(() => {
    //         return []
    //     });
    //     setTimeout(() => {
    //         setFields(() => {
    //             return f
    //         });
    //     }, 1);

    // }

    // const handleImeChange = (event) => {
    //     promenaImenaInputPolja(event.target.value);
    // }

    // const handleTipChange = (event) => {
    //     promenaTipaInputPolja(event.target.value);
    // }

    return (
        <div className='container'>
            <div className='columns'>
                <form action="" className="column is-half">
                    {
                        fields.map((field) => (
                            <div className="field">
                                <div className="control">
                                    <label htmlFor="">{field.name}</label>
                                    {field.type === "textarea" ?
                                        <textarea className="textarea is-primary" name="description" value={item.description} onChange={handleChange}></textarea>
                                        :
                                        <input className="input is-primary" type={field.type} name={field.name} value={item[field.name]} onChange={handleChange} />
                                    }
                                </div>
                            </div>
                        ))
                    }
                    {/* <button type="submit">Submit</button> */}
                </form>
                <div className="column is-one-quarter"></div>
                <div action="" className="column is-one-quarter">
                    <Card item={item} />
                </div>
            </div>
            {/* <div>
                <p>Unesite novo Input polje</p>
                <input type="text" value={imeInputPolja} name="imeInputPolja" onChange={handleImeChange} />
                <p>Unesite tip polja</p>
                <input type="text" value={tipInputPolja} name="tipInputPolja" onChange={handleTipChange} />
                <button onClick={() => { potvrda() }}>Potvrdi</button>
            </div> */}

        </div>


    )
}

export default Admin;