import { useEffect, useState } from "react";
import AdviceList from "./AdviceList";

const AllAdvice = () => {
  const [allAdvice, setAllAdvice] = useState(null)


  useEffect(() => {
    fetch('http://localhost:8000/advice')
    .then(res => {
      return res.json()
    })
    .then((data) => {
      console.log(data);
      setAllAdvice(data)
    })
  },[])

  return (
    <div className="home">
      {allAdvice && <AdviceList allAdvice={allAdvice} title="All Advice" />}
    </div>
  );
}
 
export default AllAdvice;
