import { useState } from "react";
import { useRef } from "react";
import { CloudUpload } from "lucide-react";
import { cn } from "../lib/utils";
import { useUploadFileMutation } from "../api/instructorApiSlice";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";
import useUserStore from "../store/userStore";

export default function Submission({ modal, setModal, courseId, weekId }) {
    const role = useUserStore((state) => state.user?.role);
    const color = role === "student" ? "primary" : "secondary";
    const [files, setFiles] = useState({});
    const [dragCounter, setDragCounter] = useState(0);
    const inputRef = useRef(null);
    const [overlay, setOverlay] = useState(false);

    const handleFileSelect = (selectedFiles) => {
        const newFiles = { ...files };
        for (const file of selectedFiles) {
            const objectURL = URL.createObjectURL(file);
            newFiles[objectURL] = {
                file,
                name: file.name,
                size: file.size,
                isImage: file.type.match("image.*"),
            };
        }
        setFiles(newFiles);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragCounter((prevCounter) => prevCounter + 1);
        if (hasFiles(e)) {
            e.dataTransfer.dropEffect = "copy";
        }
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setOverlay(false);
        setDragCounter((prevCounter) => prevCounter - 1);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setOverlay(true);
        if (hasFiles(e)) {
            e.dataTransfer.dropEffect = "copy";
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFileSelect(e.dataTransfer.files);
        setDragCounter(0);
    };

    const handleDelete = (objectURL) => {
        URL.revokeObjectURL(objectURL);
        setFiles((prevFiles) => {
            const newFiles = { ...prevFiles };
            delete newFiles[objectURL];
            return newFiles;
        });
    };

    const [uploadFile, { isLoading: isFileUploading }] =
        useUploadFileMutation();

    const handleSubmit = async () => {
        // alert(`Submitted Files:\n${JSON.stringify(files)}`);
        for (const objectURL in files) {
            const formData = new FormData();
            formData.append("file", files[objectURL].file);
            uploadFile({
                courseId: courseId,
                weekId: weekId,
                data: formData,
            });
        }
        toast.success("Files uploaded successfully");
    };

    const handleCancel = () => {
        Object.keys(files).forEach((objectURL) =>
            URL.revokeObjectURL(objectURL),
        );
        setFiles({});
        setModal(false);
    };

    const hasFiles = ({ dataTransfer: { types = [] } }) =>
        types.indexOf("Files") > -1;

    return (
        <div
            className={`absolute left-0 top-0 z-[10000] flex h-screen w-screen items-center justify-center bg-black/70 ${
                modal ? "flex" : "hidden"
            }`}
        >
            <div
                className="container relative flex h-[80vh] max-w-4xl flex-col rounded-md bg-white shadow-xl sm:px-8 sm:py-8"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDragEnter={handleDragEnter}
            >
                {overlay && (
                    <div className="pointer-events-none absolute left-0 top-0 flex  h-full w-full flex-col items-center justify-center rounded-md text-primary">
                        <CloudUpload className="size-12" />
                        <p className="text-lg text-blue-700">
                            Drop files to upload
                        </p>
                    </div>
                )}

                <section className="flex h-full w-full flex-col p-8">
                    <header className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 py-12">
                        <p className="mb-3 flex flex-wrap justify-center font-semibold text-gray-900">
                            <span>Drag and drop your</span>&nbsp;
                            <span>files anywhere or</span>
                        </p>
                        <input
                            id="hidden-input"
                            type="file"
                            multiple
                            ref={inputRef}
                            onChange={(e) => handleFileSelect(e.target.files)}
                            style={{ display: "none" }}
                        />
                        <button
                            id="button"
                            onClick={() => inputRef.current.click()}
                            className="focus:shadow-outline mt-2 rounded-sm bg-gray-200 px-3 py-1 hover:bg-gray-300 focus:outline-none"
                        >
                            Upload a file
                        </button>
                    </header>

                    <h1 className="pb-3 pt-8 font-semibold text-gray-900 sm:text-lg">
                        To Upload
                    </h1>

                    <div>
                        {Object.keys(files).length === 0 && (
                            <div
                                id="empty"
                                className="flex h-full w-full flex-col items-center justify-center text-center"
                            >
                                <img
                                    className="mx-auto w-32"
                                    src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                                    alt="no data"
                                />
                                <span className="text-small text-gray-500">
                                    No files selected
                                </span>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-4">
                            {Object.keys(files).map((objectURL) => (
                                <div className="relative flex h-28 w-36 flex-col gap-3 break-words rounded-md bg-gray-100 text-xs">
                                    <img
                                        src={objectURL}
                                        alt="upload preview"
                                        className={cn(
                                            "absolute left-0 top-0 h-full w-full rounded-md object-cover",
                                            {
                                                hidden: !files[objectURL]
                                                    .isImage,
                                            },
                                        )}
                                    />
                                    <div
                                        className={cn(
                                            "relative flex h-full flex-col px-3 py-2",
                                            {
                                                "bg-white/50":
                                                    files[objectURL].isImage,
                                            },
                                        )}
                                    >
                                        <h1 className="flex-1 group-hover:text-blue-800">
                                            {files[objectURL].name}
                                        </h1>
                                        <div className="mt-auto flex items-center gap-2">
                                            <svg
                                                className="ml-auto size-4 fill-blue-800"
                                                xmlns="http:www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                            </svg>
                                            <p className="size text-xs text-gray-700">
                                                {parseInt(
                                                    files[objectURL].size /
                                                        1024,
                                                )}{" "}
                                                KB
                                            </p>
                                            <button
                                                onClick={() =>
                                                    handleDelete(objectURL)
                                                }
                                                className="delete ml-auto rounded-md p-1 text-gray-800 hover:bg-gray-300 focus:outline-none"
                                            >
                                                <svg
                                                    className="pointer-events-none ml-auto h-4 w-4 fill-current"
                                                    xmlns="http:www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        className="pointer-events-none"
                                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <footer className="flex justify-end px-8 pb-8 pt-4">
                    <button
                        onClick={handleSubmit}
                        className={`focus:shadow-outline flex items-center justify-center rounded-sm bg-${color} px-3 py-1 text-white focus:outline-none`}
                    >
                        {isFileUploading ? <LoadingSpinner /> : "Upload now"}
                    </button>
                    <button
                        onClick={handleCancel}
                        id="cancel"
                        className="focus:shadow-outline ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:outline-none"
                    >
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
}
