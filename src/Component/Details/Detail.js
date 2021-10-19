import { useParams } from 'react-router';

const Detail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h3>This is details {serviceId} </h3>
            {/* {
                detail.find(id=><Info info={id}></Info>)
            } */}

        </div>
    );
};

export default Detail;