import { useSignupMutation } from "../api/apiSlice";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Signup() {
	const [signup, { isLoading }] = useSignupMutation();
	const [role, setRole] = useState("student");
	const [faculty, setFaculty] = useState("engineering");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = async () => {
		signup({
			role: role,
			name: name,
			email: email,
			faculty: faculty,
			password: password,
		});
	};

	return (
		<div className="relative min-h-screen flex flex-col px-4 justify-center items-center bg-gray-100">
			<div className="relative sm:max-w-sm w-full">
				<div className="card bg-secondary shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
				<div className="card bg-primary shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
				<div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
					<div className="block mt-3 text-sm text-gray-700 text-center font-semibold">
						Signup
					</div>
					<div className="mt-10 flex flex-col gap-6">
						<div>
							<input
								type="text"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Enter your name"
								className="mt-1 block w-full border-none bg-gray-100 rounded-xl shadow-lg focus:outline-none px-3 py-2"
							/>
						</div>

						<div>
							<input
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								className="mt-1 block w-full border-none bg-gray-100 rounded-xl shadow-lg focus:outline-none px-3 py-2"
							/>
						</div>
						<div>
							<input
								type="text"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter your password"
								className="mt-1 block w-full border-none bg-gray-100 rounded-xl shadow-lg focus:outline-none px-3 py-2"
							/>
						</div>
						<div className="grid sm:grid-cols-2 gap-8">
							<button
								className={cn(
									"p-2 text-center border rounded-xl shadow-lg transition hover:border-primary text-primary",
									{
										"border-primary text-primary":
											role === "student",
									}
								)}
								onClick={() => setRole("student")}
							>
								Student
							</button>
							<button
								className={cn(
									"p-2 text-center border rounded-xl shadow-lg transition hover:border-primary text-primary",
									{
										"border-primary text-primary":
											role === "instructor",
									}
								)}
								onClick={() => setRole("instructor")}
							>
								Instructor
							</button>
						</div>
						<div className="grid gap-2">
							<button
								className={cn(
									"p-2 text-center border rounded-xl shadow-lg transition hover:border-primary text-primary",
									{
										"border-primary text-primary":
											faculty === "engineering",
									}
								)}
								onClick={() => setFaculty("engineering")}
							>
								Engineering
							</button>
							<button
								className={cn(
									"p-2 text-center border rounded-xl shadow-lg transition hover:border-primary text-primary",
									{
										"border-primary text-primary":
											faculty === "computer-science",
									}
								)}
								onClick={() => setFaculty("computer-science")}
							>
								Computer Science
							</button>
						</div>

						<div>
							<button
								onClick={handleSignup}
								className="bg-primary w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
							>
								Signup
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
