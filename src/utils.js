import { data } from "./data"

export const allCategories=()=>{
  const categories=Array.from(new Set(data.map(obj=>obj.category)))
  return [...categories,'all'].sort((a,b)=>a.localeCompare(b))
}