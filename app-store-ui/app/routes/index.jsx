import {Link,useMatches , useNavigate, useLocation, Outlet} from 'remix'
// import { CardList } from "../CardList";
import { Header } from "../Header";
// import List from '../List';
import Home from "./home";



export default function Index() {
  const match = useMatches();
  const location = useLocation();
  const navigate = useNavigate();
console.log(location)
console.log(match,'match')
  return (
    <div >
      <Link to="/home">Home</Link>
      <Home />
  
      <Header />
  
  
      <Outlet />
    </div>
  );
}
