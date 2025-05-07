import { useEffect, useState } from "react";
import { getAllQuotes } from "../services/quote";
import QuotesList from "./QuotesList";
import { toast } from "react-toastify";







const MyQuotes = () => {
	const [quotes, setQuotes] = useState([]);

	// helper function to update state or show error if any
	async function loadAllQuotes() {
		try {
			// get data from rest api and store in component state
			const myquotes = await getAllQuotes();
			setQuotes(myquotes);
		} catch (err) {
			console.log(err);
			toast.error(err.message);
		}
	}

	// call the helper fn when component is mounted
	useEffect(() => {
		loadAllQuotes();
	}, []);

    const handleAllClick = (e) => {
        setQuotes(myquotes);
    }

    const handleFavoriteClick  =(e) =>{
        setQuotes(myquotes);
    }

	return (
		<div>
			<h1>Quotes Around the World !!!</h1>
            <button onClick={handleAllClick}>All</button>
            <button onClick={handleFavoriteClick}>Favorites</button>
			{quotes.map((b) => (
				<QuotesList key={"quote" + b.id} quote={b} />
			))}


           
		</div>
	);
};

export default MyQuotes;
