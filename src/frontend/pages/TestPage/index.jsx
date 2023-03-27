import { Outlet } from "react-router-dom"
import { ResponsiveDialog } from "../../components/modalProjetctNew"
import { ResponsiveDialogProgress } from "../../components/modalProjectProgress";

export function TestPage() {
    

    return (
        <div>
            <h1>Teste</h1>
            <div id='detail'>
                <Outlet />
            </div>
            <br/>
            <ResponsiveDialog/>
            <br/>
            <ResponsiveDialogProgress/>
            <br/>
        </div>
    )
}