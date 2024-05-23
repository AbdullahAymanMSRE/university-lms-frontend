import { useSignupMutation } from "../api/apiSlice";

export default function Login() {
	const [signup, { isLoading }] = useSignupMutation();

	return (
		<div className="relative min-h-screen flex flex-col px-4 justify-center items-center bg-gray-100">
			<div className="relative sm:max-w-sm w-full">
				<div className="card bg-secondary shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
				<div className="card bg-primary shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
				<div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
					<label
						for=""
						className="block mt-3 text-sm text-gray-700 text-center font-semibold"
					>
						Login
					</label>
					<form method="#" action="#" className="mt-10">
						<div>
							<input
								type="email"
								placeholder="Enter your email"
								className="mt-1 block w-full border-none bg-gray-100 rounded-xl shadow-lg focus:outline-none px-3 py-2"
							/>
						</div>

						<div className="mt-7">
							<input
								type="password"
								placeholder="Enter your password"
								className="mt-1 block w-full border-none bg-gray-100 rounded-xl shadow-lg focus:outline-none px-3 py-2"
							/>
						</div>

						<div className="mt-7">
							<button className="bg-primary w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
