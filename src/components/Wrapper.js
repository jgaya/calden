import React, { useState} from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../languages/es.json";
import English from "../languages/en.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;

if (local === "en-US") {
	lang = English;
} else {
	lang = Spanish;
}

const Wrapper = (props) => {
	const [locale, setLocale] = useState(local);
	const [messages, setMessages] = useState(lang);

	function selectLang (e){
		const newLocale = e.target.value;
		setLocale(newLocale);
		if (newLocale === "en-US"){
			setMessages(English);
		} else {
			setMessages(Spanish);
		}
	}
	return (
		<Context.Provider value={{ locale, selectLang}}>
			<IntlProvider messages={messages} locale={locale}>
				{props.children}
			</IntlProvider>
		</Context.Provider>
	);

}
export default Wrapper;