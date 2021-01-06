import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
	state() {
		return {
			episodes: [
				// {
				// 	id: "12312321e",
				// 	title: "Klarede opvasken",
				// 	date: "15 min siden",
				// 	rating: 4,
				// 	description:
				// 		"Kunne ikke overskue at vaske op hele sidste ige. Klarede det endeligt efter af have snakket med Niels",
				// },
				// {
				// 	id: "23412daswd",
				// 	title: "Gik en lang tur",
				// 	date: "I går kl 07.30",
				// 	rating: 3,
				// 	description:
				// 		"Gik en mega lang tur i skoven. Alle bladene og de flotte farver gjorde mig varm inden i",
				// },
				// {
				// 	id: "kajwhdnawu",
				// 	title: "S-tog",
				// 	date: "I går kl 07.30",
				// 	rating: 1,
				// 	description:
				// 		"Tog toget til skole. En klam stodder der lugtede af sveskehud satte sig ved siden af mig og var totalt creepy",
				// },
			],
		};
	},
	getters,
	mutations,
	actions,
};
