import { create } from "zustand";
import { url } from "../constants";

export const useProducts = create((set) => ({
  products: [],
  getProducts: async () => {
    const res = await fetch(url + "/getProducts");
    const data = await res.json();
    set((state) => ({ products: data }));
  },
  product: {},
  getProductById: async (id) => {
    const res = await fetch(url + `/getOneProducts?id=${id}`);
    const data = await res.json();
    const newProduct = data.shift();
    set((state) => ({ product: newProduct }));
  },
  busket: [],
  getBusketList: async () => {
    // Get Busket List from DB
    // const res = await fetch(url + '')
    // const data = await res.json()
    // set((state) => ({ busket: "" || [] }));
  },
  addItemBusket: (item) => {
    set((state) => {
      // Request for put new item to busket
      return { busket: [...state.busket, item] };
    });
  },
  deleteItemBusket: (id) => {
    set((state) => {
      // Request for delete item in busket
      const newBusket = [...state.busket].filter((item) => item._id !== id);
      return { busket: [...newBusket] };
    });
  },
  totalSum: 0,
  addTotalSum: (sum) => {
    set((state) => ({ totalSum: sum + state.totalSum }))
  },
  deleteTotalSum: (sum) => {
    set((state) => ({ totalSum: state.totalSum - sum }))
  }
}));