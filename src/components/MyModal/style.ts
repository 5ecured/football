import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        height: '500px',
        width: '800px',
        backgroundColor: 'white',
        borderRadius: '20px'
    },
    text: {
        padding: '25px'
    },
    field: {
        width: '50%'
    },
    addPlayer: {
        width: '50%',
        height: '50px'
    },
})
