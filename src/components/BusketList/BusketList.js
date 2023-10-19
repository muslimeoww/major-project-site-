import "./BusketList.css";
import BusketItem from "../BusketItem/BusketItem";
import Button from "../Button/Button";
import { useProducts } from "../../store/useProducts";

export default function BusketList({ totalSum }) {


  const busket = useProducts((state) => state.busket);

  return (
    <div className="busket-list">
      <div id="busket-title_mobile">Корзина</div>
      <div className="busket-list_title">
        <p>Название</p>
        <p style={{ marginLeft: "416px" }}>Цена</p>
        <p style={{ marginLeft: "130px" }}>Количество</p>
        <p style={{ marginLeft: "130px" }}>Итог</p>
      </div>
      <div className="busket-list_items">
        {busket.map((el) => {
          // setTotalCost(totalCost + el.cost)
          const image = el.images[0];
          return (
            <BusketItem
              key={el._id}
              id={el._id}
              title={el.title}
              amount={el.amount}
              price={el.cost}
              img={image}
              color={el.color || []}
            />
          );
        })}
        {busket.length ?
          <div className="list_items-total">
            <Button
              value={"Продолжить покупки"}
              backgroundColor={"#AFBCD1"}
            ></Button>
            <p>{totalSum}p</p>
          </div>
          :
          <></>
        }
      </div>
    </div>
  );
}
