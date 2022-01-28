
// import Card  from "../components/Card";
import {useRouter} from "next/router";


export default function List ()  {
    const router = useRouter()
    console.log(router) 
    return (
    <ul className="card-list">
      {cardData.map((card) => (
        <Card
          key={card.id}
          isSelected={router.asPath === card.id}
     
          {...card}
        />
      ))}
    </ul>
  );}