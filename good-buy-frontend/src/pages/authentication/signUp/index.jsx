import {
	Avatar,
	Button,
	TextField,
	Link,
	Box,
	Typography,
	Container,
	useTheme
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import Copyright from "../../../components/Copyright";
import { muiTextFieldCSS, tokens } from "../../../theme";
import { motion } from "framer-motion";

const SignUp = ({ onInputChange, signUp, signInInstead, invalidEmailMessage, invalidUsernameMessage, invalidPasswordMessage }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<motion.div exit={{ opacity: 0 }}>
			<Container
				maxWidth="xs"
				sx={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)'
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
						Sign Up
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
							label="Username"
							name="name"
							autoComplete="name"
							error={invalidUsernameMessage !== ""}
							helperText={invalidUsernameMessage}
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
						<Button
							fullWidth
							variant="contained"
							onClick={signUp}
							sx={{
								marginTop: 3,
								marginBottom: 2,
								color: "white",
								backgroundColor: "custom.customColorA"
							}}
						>
							Sign Up
						</Button>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Link
								onClick={signInInstead}
								variant="body2"
								sx={{
									color: "custom.customColorA",
									textDecorationColor: "black",
									cursor: "pointer"
								}}
							>
								Already have an account? Sign In
							</Link>
						</Box>
					</Box>
				</Box>
				<Copyright sx={{ marginTop: 8, marginBottom: 4 }}/>
			</Container>
		</motion.div>
	);
}

export default SignUp;