import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
    center: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '30px 50px'
    },
    score: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '20px'
    },
    gridBotRight: {
        borderBottom: '1px solid lightgrey',
        borderRight: '1px solid lightgrey',
        margin: '10px',
        marginBottom: '30px'
    },
    gridBotLeft: {
        borderBottom: '1px solid lightgrey',
        borderLeft: '1px solid lightgrey',
        margin: '10px',
        marginBottom: '30px'
    }
})