import { id } from "date-fns/locale";
import Announcement from "../../components/Announcement";
import { useGetAnnouncementsQuery } from "../../api/studentApiSlice";
import { format } from "date-fns";
import LoadingSpinner from "../../components/LoadingSpinner";
import StudentAnnouncements from "../../components/StudentAnnouncements";

export default function Announcements() {
    const { data: announcements, isLoading } = useGetAnnouncementsQuery();

    return (
        <StudentAnnouncements
            announcements={announcements}
            isLoading={isLoading}
        />
    );
}
