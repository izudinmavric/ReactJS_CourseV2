import React, { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
const QuotesDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.qouteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <h1>QuotesDetail</h1>
      <p>{params.qouteId}</p> */}
      <Route path={`/quotes/${params.qouteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.qouteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.qouteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetail;
