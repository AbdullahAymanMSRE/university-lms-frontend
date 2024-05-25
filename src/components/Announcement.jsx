export default function Announcement ({author, subject, content}) {
    const authorInitials = author.split(" ")[0][0] + author.split(" ")[1][0];
    return (
        <div className="flex h-24 justify-between border-t-2 px-9 py-6 max-md:w-screen">
            <div className="flex-shrink basis-4/5 flex  gap-6">
                <div className="size-fit text-ellipsis rounded-[100%] border-[1px] border-primary p-2 text-lg uppercase text-primary">
                    {authorInitials}
                </div>
                <div className="flex flex-col items-start">
                    <button
                        className="text-lg font-bold text-darkenedBlue"
                        onClick=""
                    >
                        {subject}
                    </button>
                    <p className="max-w-lg overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-700">
                        {content}
                    </p>
                </div>
            </div>
            <div className="flex flex-shrink-0 flex-col justify-center text-darkenedBlue">
                <p>Posted on:</p>
                <p>{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
}