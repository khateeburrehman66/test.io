import Profilepic from "./profilepic";
import Intro from "./intro";
import './css/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Fbpost(){
//    const styles ={
//     backgroundColor:'Blue',
//     position:'relative',
//    };
    return(
        <div className="container"  id="container">
            <Intro/>
<Profilepic/>

    </div>
    );
};