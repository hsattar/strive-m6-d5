import { useState } from "react"
import { useEffect } from "react"
import { Container, Row, Table } from "react-bootstrap"
import CartRow from "../components/CartRow"

export default function Cart() {

    const [cart, setCart] = useState(null)

    const fetchCart = async () => {
        try {
            const response = await fetch(`http://localhost:3001/cart`)
            if (!response.ok) throw new Error('Fetch Failed')
            const data = await response.json()
            console.log(data)
            setCart(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <Container>
            <Row className="mt-5">
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart && 
                        cart.map(item => (<CartRow item={item} />))
                    }
                </tbody>
                </Table>
            </Row>
        </Container>
    )
}