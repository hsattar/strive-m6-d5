import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import Products from "../components/Products"
import Welcome from "../components/Welcome"

export default function Home() {

    const [products, setProducts] = useState(null)

    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:3001/products`)
            if (!response.ok) throw new Error('Failed Fetch')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <Welcome />
            <Container>
                <Row>
                    {
                        products && 
                        products.map(product => (
                            <Col key={product.id}>        
                                <Products product={product} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}