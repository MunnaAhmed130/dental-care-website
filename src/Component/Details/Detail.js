import { useParams } from 'react-router';

const Detail = () => {
    const {id} = useParams();



    return (
        <div>
            <h3>This is details {id} </h3>
            {/* {
                detail.find(id=><Info info={id}></Info>)
            } */}

        </div>
    );
};

export default Detail;