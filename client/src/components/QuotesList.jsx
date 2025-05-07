//import { baseUrl } from "../services/apiconfig";

const QuotesList = (props) => {
	const { author, contents } = props.quote;
    const handleLikeClick = (e) => {
        const selectedQuote = e.target.value;
        navigate("/user/quote",
            {
                state: {
                    quote : selectedQuote,
                }

            }
        )
    }
	return (
		<div className="card d-inline-block m-2 p-2" style={{ width: "220px" }}>
			
			<h3 className="card-title">{author}</h3>
            <h3>{contents}</h3>
			
			<button
             className="btn btn-danger"
             onClick={handleLikeClick}
             >Like</button>
		</div>
	);
};

export default QuotesList;
