import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export default function Products({ product }) {
    return (
        <Link to={`${product.id}`}>
            <Card>
                <Card.Img className="product-cover" variant="top" src={product.image} />
                <Card.Body>
                    <Card.Text>{product.name}</Card.Text>
                    <Card.Text>£{product.price}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}