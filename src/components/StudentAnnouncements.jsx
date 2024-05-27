import Announcement from "./Announcement";
import LoadingSpinner from "./LoadingSpinner";

export default function StudentAnnouncements({ announcements, isLoading }) {
    console.log(announcements);
    return (
        <section className="flex h-full flex-col">
            {isLoading ? (
                <LoadingSpinner />
            ) : announcements?.length === 0 ? (
                <div className="flex-1 py-16 text-center text-xl font-medium text-gray-500">
                    No announcements
                </div>
            ) : (
                announcements?.map((announcement) => (
                    <Announcement
                        author={announcement.instructor_name}
                        subject={announcement.title}
                        content={announcement.content}
                        course={{
                            id: announcement.course_id,
                            title: announcement.course_title,
                        }}
                    />
                ))
            )}
        </section>
    );
}
