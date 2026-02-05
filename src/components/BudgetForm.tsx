import { useMemo, useState } from "react"

export default function BudgetForm() {

  const [budget, setBudget] = useState(0)  
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>{

    const value = e.target.valueAsNumber    

    setBudget(isNaN(value) ? 0 : value)

  }

  const idValid = useMemo(()=>  {

    return budget <= 0  ? true : false
  },[budget])

  const onFocus = (e : React.FocusEvent<HTMLInputElement, HTMLInputElement>) =>{

    e.target.select()

  }

  return (
    <form className="space-y-5">
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                Definir Presupuesto
            </label>
            <input 
            id="budget"
            type="number" 
            className="w-full bg-white border border-gray-200 p-2" 
            placeholder="Define tu Presupuesto" 
            name="budget"
            value={budget} 
            onChange={handleChange}
            onFocus={onFocus}/>

        </div>

        <input type="submit" 
        value='Definir Presupuesto' 
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2  text-white font-black uppercase disabled:opacity-40"
        disabled={idValid} />
            
    </form>
  )
}
