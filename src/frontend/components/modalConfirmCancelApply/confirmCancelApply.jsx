import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { theme } from '../../themes/theme';

const Modal = withReactContent(Swal)

function CancelApplyModal(props) {
    Swal.fire({
        icon: "question",
        iconColor: '#fff',
        title: `Are you sure you want to cancel you application to the project ${props.projectName}?`,
        confirmButtonText: "Remove Application",
        background: `${theme.palette.dellBlue.main}`,
        color: `${theme.palette.white.main}`,
        reverseButtons: true,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        customClass: {
            confirmButton: 'cancel-confirm-btn',
            cancelButton: 'cancel-cancel-btn'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Usuário apertou "confirmar"
            Swal.fire({
                icon: "success",
                title: `Application canceled`,
                text: `You can send a new application at any time.`,
                background: `${theme.palette.dellBlue.main}`,
                color: `${theme.palette.white.main}`,
                customClass: {
                    confirmButton: 'cancel-sucess-btn',
                }

            });
        } else if (result.isDismissed) {
            // Usuário apertou "cancelar"
            Swal.fire({
                icon: "warning",
                title: `Your application was not canceled`,
                background: `${theme.palette.dellBlue.main}`,
                color: `${theme.palette.white.main}`,
                customClass: {
                    confirmButton: 'cancel-abort-btn',
                }
            });
        }
        props.handleModalVisibleCancelApply();
    })
}

export default CancelApplyModal;