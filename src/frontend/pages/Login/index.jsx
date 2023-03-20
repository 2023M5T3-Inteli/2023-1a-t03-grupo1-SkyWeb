import { TextField, Container, Box, Button } from "@mui/material"
import { NavbarHome } from "../../components/navbarHome"
import { useRef, useState, useCallback } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export function Login() {

    const [textFieldValue, setTextFieldValue] = useState('');
    const navigate = useNavigate()

    const handleTextFieldChange = ((event) => {
        setTextFieldValue(event.target.value);
    });

    const loginOk = () => {
        // TODO Fazer as validações de login -> Sugestão utilizar talz react forms
        return navigate("/Dell/AllProject")
    }

    return (
        <div>
            <NavbarHome />

            <Container sx={{ height: 750, marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>


                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4, border: 2, padding: 4, borderRadius: 5, borderColor: "dellBlue.main" }}>
                    <TextField sx={{}}
                        label="Email"
                        InputProps={{ style: { fontSize: 20, height: 60, width: 330 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        value={textFieldValue}
                        onChange={handleTextFieldChange}

                    />

                    <Button onClick={loginOk} color="cardBackground" sx={{ backgroundColor: "dellBlue.main", height: 55, width: 170, padding: 3, fontFamily: "Poppins", fontWeight: 600, fontSize: 12, borderRadius: 1.5 }}>Login</Button>
                </Box>


            </Container>
        </div>
    )
}