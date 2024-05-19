import { twMerge } from "tailwind-merge";
import { UserTypes } from "../lib/constants";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

/*
item: {
    text: string,
    url: string
    icon: ( active: boolean ) => JSX.Element
}
*/

export default function SideNav({ items, userType, className }) {
	const isStudent = userType === UserTypes.STUDENT;
	const bgClr = isStudent ? "bg-primary" : "bg-secondary";
	const textClr = isStudent ? "text-primary" : "text-secondary";

	return (
		<nav className={twMerge("h-screen w-72 bg-white pl-10 pt-12 relative", className)}>
			<div className="logo h-11 w-40 relative">
				<div className={`h-11 w-11 rounded-xl inline-block ${bgClr}`}></div>
				<p className={`inline-block ${textClr} h-10 w-[106px] ml-3 text-2xl font-bold absolute -top-1`}>
					{isStudent ? "Student" : "Instructor"}
					<br />
					<span className="text-xs font-medium absolute top-9 uppercase">Dashboard</span>
				</p>
			</div>
			<ul className="absolute top-[139px] nav-page[color: red] w-[214px] text-[16px] flex flex-col gap-[15px]">
				{items.map((item, index) => (
					<li key={index} className={twMerge("")}>
						<NavLink end to={item.url}>
							{({ isActive, isPending, isTransitioning }) => (
								<div
									className={twMerge(
										"pl-[10px] gap-3 rounded-md h-11 flex items-center ",
										clsx({
											[bgClr]: isActive,
										})
									)}
								>
									{item.icon(isActive)}
									<p
										className={twMerge(
											"text-text",
											clsx({
												"text-white": isActive,
											})
										)}
									>
										{item.text}
									</p>
								</div>
							)}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
