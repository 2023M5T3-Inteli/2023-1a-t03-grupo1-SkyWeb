import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { MenuList, MenuItem,Paper } from "@mui/material";

export function Teste(params) {
    return (
        <div>
            <Stack direction="column" spacing={2} width={'300px'}  borderRadius={'12px'}>
                <Avatar alt="Cindy Baker" src="imagens\game.jpg" />
                <Paper>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </div>
    );
}