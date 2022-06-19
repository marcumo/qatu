import { GetStaticProps } from "next";
import React from "react";

interface Props {}

const IndexRoute: React.FC<Props> = () => {
  return (
    <div>{`<IndexRoute/>`}</div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props : {
      products: []
    },
  }; 
};

export default IndexRoute;