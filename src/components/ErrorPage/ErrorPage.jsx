import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/67548-404-error-page.json";
const ErrorPage = () => {
  return (
    <div className="">
      <Lottie className="w-1/2 h-96 mx-auto mt-20" animationData={groovyWalkAnimation} loop={true} />
    </div>
  );
};

export default ErrorPage;
