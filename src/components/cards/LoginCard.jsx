import { LogInIcon } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast, Zoom } from "react-toastify";

const LoginCard = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { googleLogin, passwordLogin } = useContext(AuthContext);
	const onSubmit = (data) => {
		passwordLogin(data)
			.then(() => {
				toast.success("Logged in successfully. Welcome back to the community!", {
					theme: "light",
					position: "top-left",
					autoClose: 2500,
					closeOnClick: true,
					hideProgressBar: false,
					draggable: true,
					pauseOnHover: false,
					pauseOnFocusLoss: false,
					transition: Zoom,
				});
				reset();
			})
			.catch((error) => {
				toast.error(error.message, {
					theme: "light",
					position: "top-left",
					autoClose: 3500,
					closeOnClick: true,
					hideProgressBar: true,
					draggable: true,
					pauseOnHover: false,
					pauseOnFocusLoss: false,
					transition: Zoom,
				});
			});
	};
	const handleGoogleLogin = () => {
		googleLogin()
			.then(() => {
				toast.success("Logged in successfully. Welcome back to the community!", {
					theme: "light",
					position: "top-left",
					autoClose: 4000,
					closeOnClick: true,
					hideProgressBar: false,
					draggable: true,
					pauseOnHover: false,
					pauseOnFocusLoss: false,
					transition: Zoom,
				});
				reset();
			})
			.catch((error) => {
				toast.error(error.message, {
					theme: "light",
					position: "top-left",
					autoClose: 3500,
					closeOnClick: true,
					hideProgressBar: true,
					draggable: true,
					pauseOnHover: false,
					pauseOnFocusLoss: false,
					transition: Zoom,
				});
			});
	};
	if (Object.values(errors).length) {
		const errorMessage = Object.values(errors)[0].message;
		toast.error(errorMessage, {
			theme: "light",
			position: "top-left",
			autoClose: 3500,
			closeOnClick: true,
			hideProgressBar: true,
			draggable: true,
			pauseOnHover: false,
			pauseOnFocusLoss: false,
			transition: Zoom,
		});
	}
	return (
		<div className="max-w-sm lg:max-w-md mx-auto p-8 rounded-3xl shadow-lg shadow-dark/20">
			<h2 className="flex items-center justify-center gap-x-4 text-4xl font-bold uppercase text-primary">
				<LogInIcon
					size={32}
					className="stroke-primary"
				/>
				Log In
			</h2>
			<form
				className="my-8 space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Email</span>
					<input
						type="email"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Account Email"
						{...register("email", {
							required: "Email is required",
						})}
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Password</span>
					<input
						type="password"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Account Password"
						{...register("password", { required: "Password is required" })}
					/>
				</label>
				<div className="text-center">
					<button
						type="submit"
						className="w-40 py-2 bg-primary text-light hover:bg-primary/90 text-xl font-bold rounded-lg cursor-pointer"
					>
						Login
					</button>
				</div>
			</form>
			<div className="relative mb-8">
				<hr className="text-stone-300" />
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 font-semibold px-2 bg-light text-stone-500">
					OR
				</span>
			</div>
			<button
				type="button"
				className="w-full py-2 flex items-center justify-center gap-x-3 border border-primary/75 text-stone-700 hover:bg-primary/10 text-lg font-medium rounded-full transition-colors duration-100 cursor-pointer"
				onClick={handleGoogleLogin}
			>
				<img
					src="https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
					alt="Google logo"
					className="size-5"
				/>
				Login with Google
			</button>
			<p className="text-center text-slate-600 font-semibold mt-6">
				First time in the garden?{" "}
				<Link
					to="/signup"
					className="text-primary hover:underline underline-offset-2"
				>
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default LoginCard;
