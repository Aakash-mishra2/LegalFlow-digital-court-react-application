import ProgressBarCircular from "./CircularProgressBar";
import { allDummyCases } from "../../../data/dummyCasesList";
import UpcomingHearings from "./UpcomingHearings";
const Overview = ({ data }) => {
    return (
        <>
            <p className="text-xl font-medium ml-4 mt-2 mb-2"> Overview </p>
            <div className="bg-transparent flex flex-row gap-2 mx-4 mb-4 ">
                <ProgressBarCircular
                    activeCases={4}
                    closedCases={5}
                    totalCases={14}
                />
                <UpcomingHearings
                    data={data}
                />
            </div>
        </>
    )
};

export default Overview;