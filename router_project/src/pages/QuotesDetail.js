import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuotesDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>QuotesDetail</h1>
      <p>{params.qouteId}</p>
      <Route path={`/quotes/${params.qouteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetail;
