import Modal from './Modal';
import Button from '../formElements/Button';

export const ErrorModal = (props) => {
    return (
        <Modal
            show = {!!props.error}
            closeBox = {props.onClear}
            header = {props.erorr.header || "An Error Occured" }
            footer = {<Button danger onClick={props.onClear}> Okay </Button>}
        >
            {props.error.data}
        </Modal>
    );
}