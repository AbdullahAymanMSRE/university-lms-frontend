import React from "react";
import SideNav from "../../components/SideNav";
import { UserTypes } from "../../lib/constants";
import * as icons from "../../svgs/sidenav";
import { Outlet } from "react-router";

export default function Home() {
	const student = {
		name: "John Doe",
	};
	return (
		<body className="bg-[#F4F7FE] flex">
			<SideNav
				items={[
					{
						text: "Dashboard",
						url: "/student",
						icon: icons.DashboardSvg,
					},
					{
						text: "Courses",
						url: "/student/courses",
						icon: icons.CoursesSvg,
					},
					{
						text: "My account",
						url: "/student/account",
						icon: icons.MyAccountSvg,
					},
					{
						text: "Files",
						url: "/student/files",
						icon: icons.FilesSvg,
					},
					{
						text: "Settings",
						url: "/student/settings",
						icon: icons.SettingsSvg,
					},
					{
						text: "Announcements",
						url: "/student/announcements",
						icon: icons.AnnouncementsSvg,
					},
				]}
				userType={UserTypes.STUDENT}
			/>
			<div className="flex-col flex ml-8 gap-7">
				<div className="mt-12 font-bold">
					<p className="text-sm leading-6 text-customBlue mb-3">Hi {student.name},</p>
					<h1 className="text-4xl leading-10 text-darkenedBlue">Welcome to EUI!</h1>
				</div>
				<Outlet />
			</div>
		</body>
	);
}
