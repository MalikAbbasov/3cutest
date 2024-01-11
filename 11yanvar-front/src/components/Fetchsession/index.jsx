import React, { useEffect, useState } from 'react'
import "./fetch.scss"

function Fetchsession() {
    const [flower, setFlower] = useState([])
    useEffect(() => {
        getFlowers()
    }, [])

    async function getFlowers() {
        const data = await fetch("http://localhost:5000/")
        const res = await data.json()
        setFlower(res)
    }


    async function delFlowers(id) {
        await fetch("http://localhost:5000/" + id, { method: 'DELETE' })
        await getFlowers()
    }

    return (
        <div>
            <div id="fetch">
                <div className="container">
                    <h5>Devoted to wonderful beauty</h5>
                    <h2>Flowers Pricing</h2>
                    <div className="cards">
                        {
                            flower.map((x) => (
                                <ul>
                                    <div className="photo">
                                        <img src={x.image} alt="" />
                                        <div className="icons">
                                            <i className="fa-solid fa-eye"></i>
                                            <i className="fa-solid fa-heart"></i>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <li>{x.name}</li>
                                    <li>{x.price} $</li>
                                    <button onClick={() => delFlowers(x._id)}>delete</button>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>


            <section id='events'>
                <div className="container">
                    <h5>Devoted to wonderful beauty</h5>
                    <h2>Events Pricing</h2>
                    <div className="cards">
                        <div className="card">
                            <h4>$16 <span>per table</span></h4>
                            <h3>Birthday Events</h3>
                            <p>lorem ipsum dolor sit amet laudem partem perfecto per</p>
                            <button>Shop Now</button>
                        </div>
                        <div className="card">
                            <h4>$16 <span>per table</span></h4>
                            <h3>Birthday Events</h3>
                            <p>lorem ipsum dolor sit amet laudem partem perfecto per</p>
                            <button>Shop Now</button>
                        </div>
                                                <div className="card">
                            <h4>$16 <span>per table</span></h4>
                            <h3>Birthday Events</h3>
                            <p>lorem ipsum dolor sit amet laudem partem perfecto per</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fetchsession