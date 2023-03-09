import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2} style={{backgroundColor:"red"}}>
            <Avatar alt="Remy Sharp" src="imagens\game.jpg" />
        </Stack>
    );
}