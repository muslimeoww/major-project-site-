import { useState } from "react";
import "./BusketItem.css";
import { useProducts } from "../../store/useProducts";

export default function BusketItem({ id, img, color, price, title }) {
  const [itemAmout, setItemAmount] = useState(1);

  const deleteItemBusket = useProducts((state) => state.deleteItemBusket);
  const addTotalSum = useProducts((state) => state.addTotalSum)
  const deleteTotalSum = useProducts((state) => state.deleteTotalSum)

  const onClick = () => {
    deleteItemBusket(id);
    deleteTotalSum(price * itemAmout)
  };

  return (
    <div className="busket-item">
      <div className="busket-item_img">
        <img src={img} alt="" />
      </div>
      <div className="busket-item_title">
        <h1>{title}</h1>
        {color.length > 0 && (
          <div className="item_title-color">
            {color.map((el) => {
              return (
                <div
                  className="color-box"
                  style={{ backgroundColor: el || "#E0DFE5" }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
      <div className="busket-item_price">
        <p>{price}p</p>
      </div>
      <div className="busket-item_amount">
        <span
          id="plus"
          onClick={() => {
            setItemAmount(itemAmout + 1);
            addTotalSum(price)
          }}
        >
          +
        </span>
        <p>{itemAmout}</p>
        <span
          id="minus"
          onClick={() => {
            if (itemAmout !== 0) {
              setItemAmount(itemAmout - 1);
              deleteTotalSum(price)
            }
          }}
        >
          -
        </span>
      </div>
      <div className="busket-item_total">
        <p>{itemAmout * parseInt(price)}p</p>
      </div>
      <button onClick={onClick} id="delete-button">
        X
      </button>
    </div>
  );
}
