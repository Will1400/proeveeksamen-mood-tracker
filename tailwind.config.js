module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		scale: {
			0: "0",

			25: ".25",
			50: ".5",
			75: ".75",
			90: ".9",

			95: ".95",
			100: "1",

			101: "1.01",
			105: "1.05",

			110: "1.1",
			125: "1.25",
			150: "1.5",

			200: "2",
		},
		extend: {},
	},
	variants: {
		extend: {
			margin: ["last"],
			scale: ["active"],
		},
	},
	plugins: [],
};
