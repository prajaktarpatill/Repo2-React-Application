import axios from "axios";
import { baseUrl } from "./apiconfig";


export async function getAllQuotes() {
	const url = `${baseUrl}/quote`;
	const resp = await axios.get(url);
	if (resp.status !== 200)
		// check axios resp status (200 or else)
		throw new Error("Axios API call Error");
	// get axios resp data - result
	const result = resp.data;
	if (result.status !== "success")
		// if api status is not success ("error"), then get the message
		throw new Error(result.message);
	const data = result.data;
	return data;
}