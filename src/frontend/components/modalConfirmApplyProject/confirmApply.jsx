import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { theme } from '../../themes/theme';

const Modal = withReactContent(Swal)

function ConfirmApplyProjectModal(props) {
    Swal.fire({
        icon: "success",
        focusConfirm: false,
        title: `Thanks for applying!`,
        text: `Soon you will receive a contact from the project leader about the next steps.`,
        confirmButtonText: "OK",
        confirmButtonColor: `${theme.palette.dellBlue.main}`,
        background: `${theme.palette.dellBlue.main}`,
        color: `${theme.palette.white.main}`,
        customClass: {
            confirmButton: 'apply-confirm-btn'
        }
    }).then(() => {
        props.handleModalVisibleApply()
    })
}

export default ConfirmApplyProjectModal;