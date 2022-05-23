import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	AppBarRoot: {
		background: "#1E1E1E !important",
	},

	Toolbar: {
		display: "flex",
		justifyContent: "space-between",

		"& svg": {
			color: "#5C5C5C",
		},
	},

	drawerRoot: {
		"& .MuiPaper-root": {
			background: "#171717",
			color: "#FFFFFF",

			"& svg": {
				color: "#5C5C5C",
			},
		},

		"& a": {
			textDecoration: "none",
		},
	},

	connectBtn: {
		background: "#E24717 !important",
		color: "#fff !important",
		borderRadius: "30px !important",
		padding: "5px 15px !important",
		textTransform: "Capitalize !important",
		fontWeight: "300 !important",
	},

	logoAvatar: {
		width: "35px !important",
		height: "35px !important",
	},

	logoText: {
		textTransform: "uppercase",
		color: "#E24717",
		fontSize: "22px !important",
		fontWeight: "600 !important",
	},

	menuIntro: {
		textTransform: "uppercase !important",
		color: "#505050",
		fontSize: 13,
	},

	menuIcon: {
		width: "30px !important",
		height: "30px !important",
		objectFit: "contain",
		borderRadius: "0",
	},
	calculatorIcon: {
		width: "27px !important",
		height: "34px !important",
		borderRadius: "0",
	},

	menuText: {
		color: "#7D7D7D",

		"& span": {
			fontWeight: 600,
		},
	},

	// dashboardPage style

	migrateBtn: {
		background: "linear-gradient(1deg, #3F1205, #9B2602);",
		fontSize: "19px !important",
		color: "#FFFFFF !important",
		textTransform: "capitalize !important",
		fontWeight: 500,
		padding: "20px 0 !important",
	},

	textField: {
		background: "#FFFFFF",
		borderRadius: 4,
	},

	// main card

	cardRoot: {
		height: "100% !important",
		background: "#E24717 !important",

		"& .MuiCardContent-root": {
			padding: 0,
			paddingBottom: "12px !important",
		},

		"& .MuiCardActions-root": {
			padding: 0,

			"& .MuiButton-root": {
				background: "linear-gradient(180deg, #A52903, #E64716);",
				fontSize: "19px !important",
				color: "#FFFFFF",
				textTransform: "Capitalize",
				fontWeight: 500,
				padding: "20px 0",
			},
		},
	},

	miniCard: {
		height: "100% !important",
		background: "#E24717 !important",

		"& .MuiCardContent-root": {
			padding: 0,
			paddingBottom: "12px !important",
		},

		"& .MuiCardActions-root": {
			padding: 0,

			"& .MuiButton-root": {
				background: "linear-gradient(180deg, #A52903, #E64716);",
				fontSize: "19px !important",
				color: "#FFFFFF",
				textTransform: "Capitalize",
				fontWeight: 500,
				padding: "20px 0",
			},
		},
	},

	cardTitle: {
		display: "flex",
		alignItems: "center",
		minHeight: 88,
		background: "#A22904 !important",
		padding: "0 20px",
		fontSize: 19,
		color: "#FFFFFF",
		fontWeight: "500 !important",
	},

	miniCardTitle: {
		display: "flex",
		alignItems: "center",
		minHeight: 45,
		background: "#A22904 !important",
		borderRadius: "5px",
		padding: "0 20px",
		fontSize: "15px !important",
		color: "#FFFFFF",
		fontWeight: "500 !important",
	},

	cardDesc: {
		minHeight: 60,
		display: "flex",
		alignItems: "center",
		padding: "0 20px",
		fontSize: "1rem !important",
		color: "#FFFFFF !important",
		fontWeight: 500,
	},

	miniCardDesc: {
		minHeight: 25,
		display: "flex",
		alignItems: "center",
		padding: "0 20px",
		fontSize: "1rem !important",
		color: "#FFFFFF !important",
		fontWeight: 500,
	},

	// link card

	linkCard: {
		background: "#171717 !important",
		border: "2px solid #707070",

		"& .MuiAvatar-root": {
			height: "34px !important",
			width: "34px !important",
			objectFit: "contain",
		},

		"& a": {
			textDecoration: "none",
			color: "#FFFFFF",
			margin: "15px 0",
			wordBreak: "break-all",
		},
	},

	copyright: {
		fontSize: "1rem",
		color: "#7D7D7D !important",
		fontWeight: 300,
	},

	// reward calculator page styles

	calculateCard: {
		padding: "0.5rem 1rem",
		margin: "2rem 0",
	},

	calculateCardTitle: {
		fontSize: "19px !important",
		color: "#767676",
	},

	calculateCardDesc: {
		fontSize: "19px !important",
		color: "#767676",
	},
}));
