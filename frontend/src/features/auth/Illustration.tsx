import React from "react";
import illustration from "../../assets/images/illustration.png";

const Illustration: React.FC = () => {
  return (
    <div className="w-1/2 bg-purple-100 flex items-center justify-center">
      <img src={illustration} alt="Illustration" className="w-3/4 max-w-lg" />
    </div>
  );
};

export default Illustration;
