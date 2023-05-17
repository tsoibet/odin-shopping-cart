import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {replace: true});
    }, 2000);
  }, []);

  return (
    <div className="NotFound">
      Page Not Found. Redirecting to homepage...
    </div>
  );
}