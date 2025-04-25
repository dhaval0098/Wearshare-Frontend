import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ViewItems = () => {
    const [items, setItems] = useState([]);
    const userId = localStorage.getItem("id")

    const getItems = async () => {
        try {
            const res = await axios.get(`/getitemsbyuserid/${userId}`);
            setItems(res.data.data);
        } catch (err) {
            console.error("Error fetching items:", err);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {!items.length ? (
                    <div className="col-12 text-center">
                        <div className="spinner-border text-primary" role="status"></div>
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item.name} className="col-md-4 mb-4">
                            <div className="card border rounded shadow-lg">
                                <img src={item.imageURL} className="card-img-top" alt="Item" />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{item.category}</h5>
                                    <p className="mb-1"><strong>Size:</strong> {item.size}</p>
                                    <p className="mb-1"><strong>Gender:</strong> {item.gender}</p>
                                    <p className="mb-1"><strong>Catagory</strong> {item.catagory}</p>
                                    {/* <Link to = "/"><button className='btn btn-danger'>add</button></Link> */}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
