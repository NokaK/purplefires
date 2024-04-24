import React from "react";
import dynamic from "next/dynamic";

const DynamicContent = dynamic(() => import("../ui/pages/MainPage"), {
  ssr: false,
});

const Page: React.FC = () => {
  return <DynamicContent />;
};

export default Page;
