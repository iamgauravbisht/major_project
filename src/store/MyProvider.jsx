import { createContext, useReducer } from "react";

const initialState = {
  performance: null,
  predictedValue: null,
  calculatedStrength: 0,
  showHistory: false,
  history: [],
  historyIndex: 0,
  inputs: [],
  data: {
    labels: ["Linear", "Random Forest", "ElasticNet", "Lasso", "Decision Tree"],
    datasets: [
      {
        label: "Algorithm Efficiency",
        data: [], // Initialize data as an empty array
        backgroundColor: [
          "rgba(255, 99, 132, 1)", // Added alpha value (1) to specify opacity
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 120, 1)",
          "rgba(54, 162, 235 ,1)",
          "rgba(255 ,206 ,86 ,1)",
          "rgba(75 ,192 ,192 ,1)",
          "rgba(153 ,102 ,255 ,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};

export const MyContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "PREDICTED_VALUE":
      return { ...state, predictedValue: action.payload };
    case "PERFORMANCE":
      return { ...state, performance: action.payload };
    case "DATA":
      return { ...state, data: action.payload };
    case "CALCULATED_STRENGTH":
      return { ...state, calculatedStrength: action.payload };
    case "HISTORY":
      return { ...state, history: [action.payload, ...state.history] };
    case "INPUTS":
      return { ...state, inputs: action.payload };
    case "HISTORY_INDEX":
      return { ...state, historyIndex: action.payload };
    case "SHOW_HISTORY":
      return { ...state, showHistory: action.payload };
    default:
      return state;
  }
}

export default function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
