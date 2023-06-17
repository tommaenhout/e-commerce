import ko from "../../assets/ko.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()

    const [countDown, setCountDown] = useState(3)


    useEffect(() => {
        const interval = setInterval(() => {
          if (countDown > 0) {
            setCountDown(countDown - 1);
          } else {
            navigate('/');
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [countDown]);

    return (
        <div>
            <h1>Oops... you are in a wrong place: 404</h1>
            <p>{`redirecting ${countDown}`}</p>
            <img src={ko} alt="KO" />
        </div>
    );
    }
export default NotFoundPage;