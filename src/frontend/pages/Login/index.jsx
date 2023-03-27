import { TextField, Container, Box, Button, Typography } from "@mui/material"
import { NavbarHome } from "../../components/navbarHome"
import { useRef, useState, useContext, useEffect } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import api from "../../api";

export function Login() {
    const ref = useRef(null)

    const [stateError, setStateError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = JSON.stringify(sessionStorage.getItem("token"))

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
        }
    }, [])


    const loginOk = async () => {

        // TODO Fazer as validações de login -> Sugestão utilizar talz react forms

        await api.post("/login", { email: ref.current.value, password: 1 }).catch((res) => {

            setStateError(true)

            setTimeout(() => {
                setStateError(false)
            }, 3000)

        }).then((res) => {

            api.defaults.headers.Authorization = `Bearer ${res.data.token}`
            sessionStorage.setItem("token", res.data.token)
            sessionStorage.setItem("user", JSON.stringify(res.data.user))

            return navigate("/Dell/AllProject")
        })
    }

    return (
        <div>
            <NavbarHome />

            <Container sx={{ height: 750, marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>


                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4, border: 2, padding: 4, borderRadius: 5, borderColor: "dellBlue.main" }}>
                    {stateError && <Typography variant="text2" sx={{ color: "red" }}>Email invalido</Typography>}
                    <TextField sx={{}}
                        label="Email"
                        InputProps={{ style: { fontSize: 20, height: 60, width: 330 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}

                        inputRef={ref}


                    />

                    <Button onClick={loginOk} color="cardBackground" sx={{ backgroundColor: "dellBlue.main", height: 55, width: 170, padding: 3, fontFamily: "Poppins", fontWeight: 600, fontSize: 12, borderRadius: 1.5 }}>Login</Button>
                </Box>


            </Container>
        </div>
    )
}