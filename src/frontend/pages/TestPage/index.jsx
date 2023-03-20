import { Outlet } from "react-router-dom"
import { ResponsiveDialog } from "../../components/modalAppliy"

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
            <div>
                <ResponsiveDialog/>
            </div>
        </div>
    )
}