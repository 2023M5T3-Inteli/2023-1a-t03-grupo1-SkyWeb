import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { theme } from '../../themes/theme';

const Modal = withReactContent(Swal)

function ConfirmDeleteProjectModal(props) {
    Swal.fire({
        icon: "question",
        iconColor: '#fff',
        title: `Are you sure you want to delete the project "${props.projectName}"?`,
        confirmButtonText: "Delete",
        background: `${theme.palette.dellBlue.main}`,
        color: `${theme.palette.white.main}`,
        reverseButtons: true,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        customClass: {
            confirmButton: 'delete-confirm-btn',
            cancelButton: 'delete-cancel-btn'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Usuário apertou "confirmar"
            Swal.fire({
                icon: "success",
                title: `${props.projectName} successfully deleted.`,
                background: `${theme.palette.dellBlue.main}`,
                color: `${theme.palette.white.main}`,
                customClass: {
                    confirmButton: 'delete-sucess-btn',
                }

            });
        } else if (result.isDismissed) {
            // Usuário apertou "cancelar"
            Swal.fire({
                icon: "warning",
                title: `The project ${props.projectName} was not deleted.`,
                background: `${theme.palette.dellBlue.main}`,
                color: `${theme.palette.white.main}`,
                customClass: {
                    confirmButton: 'delete-abort-btn',
                }
            });
        }
        props.handleModalVisibleDelete();
    })
}

export default ConfirmDeleteProjectModal;