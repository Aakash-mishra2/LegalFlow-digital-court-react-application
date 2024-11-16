import { FaFileDownload } from "react-icons/fa";

const PdfDownloader = ({ id, fileId, fileName, fileTitle }) => {
    const downloadLink = `${process.env.REACT_APP_BASE_URL}/file/${fileId}`;
    return (
        <a key={id} className="p-1 pr-4 flex flex-row gap-2 items-center bg-gray-300 mb-2 rounded-sm w-full" href={downloadLink} download>
            <FaFileDownload
                className="text-2xl text-blue-500"
            />
            <p className="text-sm font-medium text-black">{fileTitle}: {fileName}</p>
        </a>
    )
};
export default PdfDownloader;