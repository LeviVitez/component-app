import { Component, ReactNode } from "react";
import { Product as ProductInterface } from "../Product";

interface Props {
  product: ProductInterface
}

export default class Product extends Component<Props> {
  render(): ReactNode {
    return <tr style={{ color: this.props.product.stocked ? 'black' : 'red' }}>
      <td>{this.props.product.name}</td>
      <td>{this.props.product.price}</td>
    </tr>
  }
}
