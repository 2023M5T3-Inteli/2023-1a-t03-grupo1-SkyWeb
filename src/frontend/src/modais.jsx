{/* Remove person confirmation modal */ }
<button onClick={handleModalVisible}>Modal Remove Person</button>

{
    modalVisible &&
        <RemovePersonModal handleModalVisible={handleModalVisible} name="Livia Bonotto" />
}


{/* Create project confirmation modal */ }
<button onClick={handleModalVisibleProject}>Modal Confirm Project</button>

{
    modalVisibleProject &&
        <ConfirmCreateProjectModal handleModalVisibleProject={handleModalVisibleProject} />
}


{/* Delete project confirmation modal */ }
<button onClick={handleModalVisibleDelete}> Modal Delete Project </button>
{
    modalVisibleDelete &&
        <ConfirmDeleteProjectModal handleModalVisibleDelete={handleModalVisibleDelete} projectName="Backoffice" />
}


{/* Apply project confirmation modal */ }
<button onClick={handleModalVisibleApply}> Modal Apply Project </button>
{
    modalVisibleApply &&
        <ConfirmApplyProjectModal handleModalVisibleApply={handleModalVisibleApply} />
}


{/* Cancel application confirmation modal */ }
<button onClick={handleModalVisibleCancelApply}> Modal cancel application </button>
{
    modalVisibleCancel &&
        <CancelApplyProject handleModalVisibleCancelApply={handleModalVisibleCancelApply} projectName="Backoffice" />
}

{/* <AlertDialogSlide>

        </AlertDialogSlide> */}