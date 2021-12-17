import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails() {

    const { productId } = useParams()
    const [productInfo, setProductInfo] = useState(null)

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3001/products/${productId}`)
            if (!response.ok) throw new Error('Fetch Failed')
            const data = await response.json()
            console.log(data)
            setProductInfo(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, [])

    return (
        <Container>
            <Row className="mt-5 text-center">
                {
                    productInfo && 
                    <>
                        <Col xs="12" md="6">
                            <img src={productInfo.image} alt="" className="img-fluid" />
                        </Col>
                        <Col xs="12" md="6">
                            <h2>{productInfo.name}</h2>
                            <h4>{productInfo.description}</h4>
                            <p>£{productInfo.price}</p>
                        </Col>
                    </>
                }
            </Row>
        </Container>
    )
}