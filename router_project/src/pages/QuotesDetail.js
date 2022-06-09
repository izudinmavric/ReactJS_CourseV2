import React, { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];
const QuotesDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { qouteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.qouteId);
  useEffect(() => {
    sendRequest(qouteId);
  }, [sendRequest, qouteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {/* <h1>QuotesDetail</h1>
      <p>{params.qouteId}</p> */}
      {/* <Route path={`/quotes/${params.qouteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.qouteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/${params.qouteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetail;
