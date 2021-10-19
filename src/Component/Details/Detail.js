import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Info from './Info';

const Detail = () => {
    const { detail } = useAuth();
    const {id} = useParams();
    const params = useParams();
    console.log(params)


    return (
        <div>
            <h3>This is details{id} </h3>
            {
                detail.find(id=><Info info={id}></Info>)
            }

        </div>
    );
};

export default Detail;