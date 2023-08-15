import RecentBlock from "./components/RecentBLock";
import UploadBlock from "./components/UploadBlock";
import ListGroup from "./components/UploadBlock";
import './app.css';
import { Link } from "react-router-dom";



function App() {

  return (
    <div>
      <Link to={"/Library"}>dsmdsdn</Link>
      <UploadBlock />
      <RecentBlock />
    </div>
  )
}

export default App
