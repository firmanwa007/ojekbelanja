import React, {PropTypes as T} from 'react';

import Button from '../Button';
import TextField from '../TextField';
import { escapeFloatingPoint, quantify, subtotal } from '../../services/product';
// import { update, remove } from '../../services/form';

export default function ListItem({
  id,
  item,
  order
}) {
  const onChange = (field, value) => {
    // update(context, name, field, escapeFloatingPoint(value));
  }

  const onBlur = (productId) => {
    if (order[productId] <= 0) {
      // remove(context, name, productId);
    }
  }

  const removeOrder = (productId) => {
    // remove(context, name, productId);
  }

  return (
    <table className="Pesanan-item">
      <tbody>
        <tr>
          <td className="Pesanan-item-image-wrapper">
            <img
              className="Pesanan-item-image"
              src={require(`../../css/images/${item.image}`)}
              alt={item.name}
              />
          </td>
          <td className="Pesanan-item-detail">
            <table width="100%">
              <tbody>
                <tr>
                  <td width="100%">
                    <div className="Pesanan-item-name">
                      {item.name}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="Pesanan-item-price-per-unit">
                    <span className="Pesanan-item-price">
                      {`Rp ${(item.price).toLocaleString('id')}`}
                    </span>
                    <span className="Pesanan-item-unit">
                      {`/${item.unit}`}
                    </span>
                    <div className="Pesanan-item-order-quantified">
                      {quantify(order[id], item.step, item.unit)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="Pesanan-item-total-price">
                      {subtotal(order[id], item.step, item.price)}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="Pesanan-item-order-qty">
            <TextField
              className="Pesanan-item-order-qty-input"
              name={id}
              type="number"
              display="fixed"
              value={escapeFloatingPoint(order[id] * item.step)}
              onChange={(name, value) => onChange(id, value / item.step)}
              onBlur={(name, value) => onBlur(id)}
              noValidation
              min={0}
              step={item.step}
              />
            <span className="Pesanan-item-order-qty-unit">
              {item.unit}
            </span>
          </td>
          <td className="Pesanan-item-order-qty-action">
            <Button
              display="icon"
              action={(e) => removeOrder(id)}
              icon="trash"
              text="Hapus"
              isSecondary
              isSmall
              />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

ListItem.propTypes = {
  id: T.string.isRequired,
  item: T.object.isRequired,
  order: T.object.isRequired
}