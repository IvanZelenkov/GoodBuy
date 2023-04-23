import { useState, useEffect } from "react";
import FilterCategoryTitle from "./FilterCategoryTitle";
import { FormControl, Grid, IconButton, ListItem, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { muiTextFieldCSS } from "../../theme";
import { filterProducts } from "../../utils/products/utils";

const PriceRangeFilter = ({ state, setState, customColors }) => {
	const [disableButton, setDisableButton] = useState(true);

	const checkInputValidity = () => {
		const priceFrom = Number(state.priceFrom.trim());
		const priceTo = Number(state.priceTo.trim());

		if (isNaN(priceFrom) ||
			isNaN(priceTo) ||
			state.priceFrom.trim() === "" ||
			state.priceTo.trim() === "" ||
			priceFrom < 0 ||
			priceTo < 0 ||
			(priceFrom === 0 && priceTo === 0)
		) {
			setDisableButton(true);
		} else {
			setDisableButton(false);
		}
	};

	useEffect(() => {
		checkInputValidity();
	}, [state]);

	return (
		<>
			<FilterCategoryTitle title={"Price Range"} customColors={customColors}/>
			<ListItem sx={{ display: "flex", borderRadius: "2px" }}>
				<FormControl sx={{ mt: 1, float: "left" }}>
					<Grid container spacing={2} sx={{ alignItems: "center" }}>
						<Grid item xs={4}>
							<TextField
								label="min"
								variant="outlined"
								value={state.priceFrom}
								onChange={(event) => {
									setState((prevState) => ({...prevState, priceFrom: event.target.value}));
									checkInputValidity();
								}}
								sx={muiTextFieldCSS(customColors[6])}
								inputProps={{ style: { fontFamily: "Montserrat" }}}
								inputlabelprops={{ style: { fontFamily: "Montserrat" }}}
							/>
						</Grid>
						<Grid item xs={1}>
							<Typography>to</Typography>
						</Grid>
						<Grid item xs={4}>
							<TextField
								label="max"
								variant="outlined"
								value={state.priceTo}
								onChange={(event) => {
									setState((prevState) => ({...prevState, priceTo: event.target.value}));
									checkInputValidity();
								}}
								sx={muiTextFieldCSS(customColors[6])}
								inputProps={{ style: { fontFamily: "Montserrat" }}}
								inputlabelprops={{ style: { fontFamily: "Montserrat" }}}
							/>
						</Grid>
						<Grid item xs={1}>
							<IconButton onClick={() => {
								filterProducts(
									[{ key: "priceRange", value: state.priceFrom + "-" + state.priceTo }],
									state,
									setState,
									state.lastSearchTerm
								)
							}} disabled={disableButton}>
								<ArrowForwardIosIcon/>
							</IconButton>
						</Grid>
					</Grid>
				</FormControl>
			</ListItem>
		</>
	);
};

export default PriceRangeFilter;