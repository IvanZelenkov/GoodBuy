import {
	Avatar,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	Container,
	useTheme
} from "@mui/material";
import { CheckBox as CheckBoxIcon, LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import Copyright from "../../../components/Copyright";
import { muiTextFieldCSS, tokens } from "../../../theme";
import { motion } from "framer-motion";

const SignIn = ({ onInputChange, signIn, signUpInstead, invalidEmailMessage, invalidPasswordMessage }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<motion.div exit={{ opacity: 0 }}>
			<Container
				maxWidth="xs"
				sx={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)"
				}}
			>
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Avatar sx={{ margin: 1, backgroundColor: "custom.customColorA" }}>
						<LockOutlinedIcon/>
					</Avatar>
					<Typography
						sx={{
							fontSize: "20px",
							fontFamily: "Montserrat",
							color: "custom.customColorA"
						}}
					>
						Sign In
					</Typography>
					<Box sx={{ marginTop: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							label="Email Address"
							name="username"
							autoComplete="email"
							autoFocus
							error={invalidEmailMessage !== ""}
							helperText={invalidEmailMessage}
							onChange={onInputChange}
							sx={muiTextFieldCSS}
							inputProps={{ style: { fontFamily: "Montserrat" }}}
							InputLabelProps={{ style: { fontFamily: "Montserrat" }}}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							error={invalidPasswordMessage !== ""}
							helperText={invalidPasswordMessage}
							onChange={onInputChange}
							sx={muiTextFieldCSS}
							inputProps={{ style: { fontFamily: "Montserrat" }}}
							InputLabelProps={{ style: { fontFamily: "Montserrat" }}}
						/>
						<FormControlLabel
							control={<Checkbox
								value="remember"
								sx={{ color: "black" }}
								checkedIcon={<CheckBoxIcon sx={{ color: "custom.customColorA" }}/>}
							/>}
							label={
								<Typography style={{
									color: "custom.customColorA",
									fontFamily: "Montserrat",
									fontWeight: "600"
								}}>
									Remember me
								</Typography>
							}
							sx={{ color: "custom.customColorA" }}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							onClick={signIn}
							sx={{
								marginTop: 3,
								marginBottom: 2,
								color: "white",
								backgroundColor: "custom.customColorA"
							}}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link
									variant="body2"
									sx={{
										color: "custom.customColorA",
										textDecorationColor: "black",
										cursor: "pointer",
										fontFamily: "Montserrat"
									}}
								>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link
									onClick={signUpInstead}
									variant="body2"
									sx={{
										color: "custom.customColorA",
										textDecorationColor: "black",
										cursor: "pointer",
										fontFamily: "Montserrat"
									}}
								>
									Don't have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright/>
			</Container>
		</motion.div>
	);
}

export default SignIn;