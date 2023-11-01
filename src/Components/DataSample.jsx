import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function DataSample() {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:8080/products/all')
        .then(response => {
        setData(response.data);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
    }, []);
    return (
        <div>
        <h1>Data from Spring Boot API</h1>
        <ul>
            {data.map(item => (
            <li key={item.id}>{item.name} : {item.description}</li>
            ))}
        </ul>
        </div>
    );
    }
