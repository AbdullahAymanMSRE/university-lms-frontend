import { UserTypes } from "../../lib/constants";
import * as icons from "../../svgs/sidenav";
import MainLayout from "../../components/MainLayout";
import useUserStore from "../../store/userStore";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import AuthHeader from "../../components/AuthHeader";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const user = useUserStore((state) => state.user);

    useEffect(() => {
        if (user) {
            setLoading(false);
        }
    }, [user]);

    return loading ? (
        <>
            <AuthHeader />

            <div className="flex h-screen w-screen items-center justify-center">
                <LoadingSpinner />
            </div>
        </>
    ) : (
        <MainLayout
            user={user}
            navUrls={[
                {
                    text: "Dashboard",
                    url: "/instructor",
                    icon: icons.DashboardSvg,
                },
                {
                    text: "Courses",
                    url: "/instructor/courses",
                    icon: icons.CoursesSvg,
                },
                {
                    text: "Students",
                    url: "/instructor/students",
                    icon: icons.StudentsSvg,
                },
                {
                    text: "Assignments",
                    url: "/instructor/assignments",
                    icon: icons.CalendarSvg,
                },
                {
                    text: "Announcements",
                    url: "/instructor/announcements",
                    icon: icons.AnnouncementsSvg,
                },
            ]}
            userType={UserTypes.INSTRUCTOR}
        />
    );
}
