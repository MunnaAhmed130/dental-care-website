import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {id} = useParams();
    // console.log(params)
    const { detail, setDetail } = useState();
    useEffect(() => {
        const url = `fakeData.json/${id}`;
        fetch(url)
            .then(res => res.json())
        .then(data => setDetail(data))

    }, [])
    console.log(detail)
    return (
        <div>
            <h3>This is details{id} </h3>
        </div>
    );
};

export default Detail;