export default function Announcement({ author, subject, content }) {
    const authorInitials = author.split(" ")[0][0] + author.split(" ")[1][0];
    return (
        <div className="flex h-24 justify-between gap-12 border-t-2 px-9 py-6 max-md:w-screen">
            <div className="flex flex-1 gap-6">
                <div className="text-ellipsis rounded-full border border-primary p-2 text-lg uppercase text-primary font-medium">
                    {authorInitials}
                </div>
                <div className="flex flex-1 flex-col items-start">
                    <button
                        className="text-lg font-bold text-darkenedBlue"
                        onClick=""
                    >
                        {subject}
                    </button>
                    <p className="line-clamp-1 max-w-lg text-sm text-gray-700">
                        {content}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center text-darkenedBlue">
                <p>Posted on:</p>
                <p>{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
}
