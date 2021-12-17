import Card from 'react-bootstrap/Card'

export default function Products({ product }) {
    return (
        <Card>
            <Card.Img className="product-cover" variant="top" src={product.image} />
            <Card.Body>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>£{product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}