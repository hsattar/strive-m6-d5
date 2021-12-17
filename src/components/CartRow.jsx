export default function CartRow({ item }) {
    return(
        <tr>
            <td><img src={item.product.image} alt="" className="img-fluid cart-image" /></td>
            <td>{item.product.name}</td>
            <td>{item.product.price}</td>
            <td>{item.qty}</td>
        </tr>
    )
}