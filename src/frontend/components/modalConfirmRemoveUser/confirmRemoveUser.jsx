import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { theme } from '../../themes/theme';

const Modal = withReactContent(Swal)

function RemovePersonModal(props) {
    Swal.fire({
        icon: "question",
        iconColor: '#fff',
        title: `Are you sure you want to remove ${props.name} from your team?`,
        confirmButtonText: "Remove",
        background: `${theme.palette.dellBlue.main}`,
        color: `${theme.palette.white.main}`,
        reverseButtons: true,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        customClass: {
            confirmButton: 'remove-confirm-btn',
            cancelButton: 'remove-cancel-btn'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Usuário apertou "confirmar"
            Swal.fire({
                icon: "success",
                title: `${props.name} successfully removed from your team.`,
                background: `${theme.palette.dellBlue.main}`,
                color: `${theme.palette.white.main}`,
                customClass: {
                    confirmButton: 'remove-sucess-btn',
                }

            });
        } else if (result.isDismissed) {
            // Usuário apertou "cancelar"
            Swal.fire({
                icon: "warning",
                title: `${props.name} was not removed from your team.`,
                background: `${theme.palette.dellBlue.main}`,
                color: `${theme.palette.white.main}`,
                customClass: {
                    confirmButton: 'remove-abort-btn',
                }
            });
        }
        props.handleModalVisible();
    })
}

export default RemovePersonModal;