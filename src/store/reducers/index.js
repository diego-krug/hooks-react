function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "multiply7":
      return { ...state, number: state.number * 7 };
    case "divide25":
      return { ...state, number: state.number / 25 };
    case "arredondar":
      return { ...state, number: parseInt(state.number) };
    case "addNewNumberN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}

export {reducer}