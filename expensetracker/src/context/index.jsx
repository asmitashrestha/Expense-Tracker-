import { createContext, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({children}){
  const [formData, setFormData] = useState({
    type:'income',
    amount:0,
    description:''
  })
  const [value,setValue] = useState('expense')
  const [totalExpense, setTotalExpense] =useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
 const [allTransaction, setAllTransaction] = useState([])
 
function handleFormSubmit(getFormData){
console.log(getFormData);
if(!getFormData.description || !getFormData.amount) return
setAllTransaction([...allTransaction, {...getFormData, id: Date.now()}])
}

  return <GlobalContext.Provider value={{handleFormSubmit,formData,setFormData, value,setValue,totalExpense,setTotalExpense,totalIncome,setTotalIncome,allTransaction,setAllTransaction}}>{children}</GlobalContext.Provider>
}