import Button from '../formElements/Button';
import CommonModal from './Modal';
const ErrorModal = ({ error, onClear }) => {
    return (
        <CommonModal
            openModal={!!error}
            handleClose={onClear}
            className="h-1/2 w-1/2"
            id="error-modal"
        >
            <div className="relative p-8 bg-gray-100 rounded-xl h-full items-center flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shine"></div>
                <span className="text-4xl font-bold mt-2">Oops</span>
                <span className="text-md mt-3">We&apos;re sorry,</span>
                <p className="text-md mb-5">Something went wrong!</p>
                <p className="italic text-sm">{error}</p>
                <Button className="rounded-full px-8 py-1 border-2 mt-6 border-black" handler={onClear}>Retry</Button>
            </div>
        </CommonModal>
    );
}

export default ErrorModal;