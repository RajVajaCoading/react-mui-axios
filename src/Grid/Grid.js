import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

 function GridExmple(){
    return (
        <>
        <h1>grid</h1>
        <Grid container>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"red"} p={5}>1</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"yellow"} p={5}>2</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"pink"} p={5}>3</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"blue"} p={5}>4</Box>
            </Grid>
        </Grid>

        <h1>spacing grid</h1>
        <Grid container spacing={2} >
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"red"} p={5}>1</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"yellow"} p={5}>2</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"pink"} p={5}>3</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"blue"} p={5}>4</Box>
            </Grid>
        </Grid>

        <h1>content center grid</h1>
        <Grid container spacing={2} justifyContent="center">
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"red"} p={5}>1</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"yellow"} p={5}>2</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"pink"} p={5}>3</Box>
            </Grid>
            
        </Grid>

        <h1>content center grid</h1>
        <Grid container spacing={2} justifyContent="center">
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"red"} p={5}>
                    <Grid container>
                        <Grid item xs={12}>
                    <Box textAlign={"center"} backgroundColor={"yellow"} p={5}>1-1</Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box textAlign={"center"} backgroundColor={"pink"} p={5}>1-2</Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box textAlign={"center"} backgroundColor={"green"} p={5}>1-3</Box>
                    </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"yellow"} p={5}>2</Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box textAlign={"center"} backgroundColor={"pink"} p={5}>
                <Grid container>
                        <Grid item xs={12}>
                    <Box textAlign={"center"} backgroundColor={"yellow"} p={5}>1-1</Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box textAlign={"center"} backgroundColor={"red"} p={5}>1-2</Box>
                    </Grid>
                    <Grid item xs={12}>
                    <Box textAlign={"center"} backgroundColor={"green"} p={5}>1-3</Box>
                    </Grid>
                    </Grid>
                </Box>
            </Grid>
            
        </Grid>
        </>
    )
}

export default GridExmple;