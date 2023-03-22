import { Outlet } from "react-router-dom"
import { ResponsiveDialog } from "../../components/modalProjetctNew"
import { ResponsiveDialogProgress } from "../../components/modalProjectProgress";
import { ResponsiveDialogTeste } from "../../components/modalTeste";

export function TestPage() {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
    ];

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
            <ResponsiveDialogTeste/>
            
        </div>
    )
}