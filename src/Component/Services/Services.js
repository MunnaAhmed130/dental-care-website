import { Row } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import Service from "../Service/Service";

const Services = () => {
    const { services } = useAuth();
    return (
        <div className="services">
            <h2 className="pt-5 fw-bold fs-1">Our Services</h2>
            <Row xs={1} md={3} className="g-4 m-4">
            {
                services.map(service => <Service key={service.id}
                service={service}></Service>)
            }
            </Row>

        </div>
    );
};

export default Services;