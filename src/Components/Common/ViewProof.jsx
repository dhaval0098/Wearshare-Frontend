import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ViewProof = () => {
    const [items, setItems] = useState([]);

    const getproof = async () => {
        try {
            const res = await axios.get("/gproof");
            setItems(res.data.data);
        } catch (err) {
            console.error("Error fetching items:", err);
        }
    };

   
       

    useEffect(() => {
        getproof();
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
                                    <p className="mb-1"><strong>Name:</strong> {item.name}</p>
                                    <p className="mb-1"><strong>email:</strong> {item.email}</p>
                                    <p className="mb-1"><strong>phone:</strong> {item.phone}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
