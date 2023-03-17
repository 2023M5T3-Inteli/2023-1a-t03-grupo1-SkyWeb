import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { theme } from '../../themes/theme';

const Modal = withReactContent(Swal)

function ConfirmCreateProjectModal(props) {
    Swal.fire({
        icon: "success",
        iconColor: '#fff',
        focusConfirm: false,
        title: `Thanks for bringing your project!`,
        text: `Wait for the manager confirmation.`,
        confirmButtonText: "OK",
        confirmButtonColor: `${theme.palette.dellBlue.main}`,
        background: `${theme.palette.dellBlue.main}`,
        color: `${theme.palette.white.main}`,
    }).then(() => {
        props.handleModalVisibleProject()
    })
}

export default ConfirmCreateProjectModal;