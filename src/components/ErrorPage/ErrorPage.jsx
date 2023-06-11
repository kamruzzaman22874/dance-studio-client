import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/67548-404-error-page.json";
const ErrorPage = () => {
  return (
    <div>
      <Lottie className="w-1/2 mx-auto" animationData={groovyWalkAnimation} loop={true} />
    </div>
  );
};

export default ErrorPage;
