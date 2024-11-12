import { FaFileDownload } from "react-icons/fa";

const PdfDownloader = ({ pdfTitle, pdfId }) => {
    const pdfUrl = `${process.env.REACT_APP_BASE_URL}/file/${pdfId}`;
    return (
        <div className="p-2 py-3 flex flex-row gap-2 bg-gray-300 mb-2 rounded-sm w-[90%]">
            {pdfUrl &&
                <>
                    <a href={pdfUrl} download>
                        <FaFileDownload
                            className="text-2xl text-blue-500"
                        />
                    </a>
                    <p className="text-sm font-light font-circular text-black">Download : {pdfTitle}</p>
                </>
            }
        </div>
    )
};
export default PdfDownloader;