import Modal from './Modal';
import Button from '../formElements/Button';

const ErrorModal = (props) => {
    return (
        <Modal
            show = {!!props.error}
            closeBox = {props.onClear}
            header = 'An Error Occured'
            footer = {<Button danger onClick={props.onClear}> Okay </Button>}
        >
            <p>{props.error}</p>
        </Modal>
    );
}

export default ErrorModal;