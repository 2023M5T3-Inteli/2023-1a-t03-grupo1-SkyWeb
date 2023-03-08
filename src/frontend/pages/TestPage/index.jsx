import { Outlet } from "react-router-dom"

export function TestPage() {
    return (
        <div>
            <h1>Teste</h1>
            <div id='detail'>
                <Outlet />
            </div>
        </div>
    )
}