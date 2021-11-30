import { SET_INFO_PRODUCT } from "./Constants";

const initialState = {
  item: {},
};
function reduce(state, action) {
  switch (action.type) {
    case SET_INFO_PRODUCT:
      return {
        item: action.payload,
      };
    default:
      throw new Error("error");
  }
}
export { initialState };
export default reduce;
