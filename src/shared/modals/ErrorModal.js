import CommonModal from './Modal';
const ErrorModal = ({ error, onClear }) => {
    return (
        <CommonModal
            openModal={!!error}
            handleClose={onClear}
            className="h-[50vh] bg-white"
            id="error-modal"
        >
            <div className="w-[60vw] rounded-2xl">
                <p>{error}</p>
            </div>
        </CommonModal>
    );
}

export default ErrorModal;