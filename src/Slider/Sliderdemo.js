import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import { Stack } from "@mui/system";

function SliderDemo(){
    return(
        <>
        <Box sx={{width:500}}>
            <Stack direction="row" spacing={2} alignItems="center" aria-label="Temperature" step={10}>
            <VolumeDown/>
                <Slider/>
           <VolumeUp/>
           </Stack>
        </Box>
        </>
    )
}

export default SliderDemo;