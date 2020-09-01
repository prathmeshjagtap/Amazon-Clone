export const initialState={
    basket : [],
    user : null
}

export const getBasktTotal = (basket) => (
basket?.reduce((amount,item) => item.price+amount ,0))


const  Reducer =(state,action) => {
    switch(action.type){
         case "SET_USER":
             return{
              ...state,
              user:action.user
         }
         case "ADD_TO_BASKET":
        // logic for adding item to basket
            return {
                ...state,
                basket : [...state.basket,action.item],
            }
        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket
            var new_basket = [...state.basket];
            const index = state.basket.findIndex(
                 (basketItem) => basketItem.id === action.id
                );
            if (index >= 0) {
                console.log("ITem found");
                new_basket.splice(index, 1);
             } else {
                console.warn("No item Found!");
            }
            return {
                        ...state,
                        basket: new_basket,
                 };
        default:
            return state

    }
}
export default Reducer;