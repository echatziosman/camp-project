import { cartItems } from '../initialValues/cartItems';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find(c => c.product.id === payload.id);
      // Şayet sepette eklenmek istenen eleman var ise o zaman if'teki product dolacaktır ve if'e girecektir
      if (product) {
        //Aynı eleman varsa
        product.quantity++; // Bir artırdık fakat elemanı ekler ancak referansı değiştirmez
        return {
          ...state,
        };
      } else {
        return {
          ...state, //başka default değerler de olabileceği için bu şekilde yazıyoruz
          cartItems: [...state.cartItems, { quantity: 1, product: payload }], //Ürün eklenmiş ve yeni bir referans oluşmuş oluyor
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(c => c.product.id !== payload.id), //filter fonksiyonu yeni bir dizi (referans) oluşturur, burada silinmek istenen ürün dışarıda kalacaktır
      };

    default:
      return state;
  }
}
