import { makeStyles} from '@mui/styles';

const useStyles = makeStyles({
container: {
    padding:'0',
    backgroundColor: '#fcfcfc',
    height: '100vh',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
},
brandName: {
    background: 'linear-gradient(45deg, #CB218E, #6617CB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'fadeIn 2s',
    textAlign: 'center'
},
buttonFilled: {
    background: '#fcfcfc',
    border: '1px solid linear-gradient(to right bottom, #CB218E, #6617CB)',
    color: '#CB218E',
    '&:hover': {
        transitionDuration:'0.5s',
        background: 'linear-gradient(90deg, #CB218E, #6617CB)',
        color: '#fcfcfc',
    }
},
button: {
    background: 'linear-gradient(90deg, #CB218E, #6617CB)',
    color: '#fcfcfc',
    '&:hover': {
        transitionDuration:'0.5s',
        background: '#fcfcfc',
        border: '1px solid linear-gradient(to right bottom, #CB218E, #6617CB)',
        color: '#CB218E'
    }
},
box: {
    display: 'flex',
    justifyContent:'center',
    flexDirection:'row'
},
faintText: {
    opacity:'0.8',
    textAlign:'center'
},
loginButton: {
    marginLeft:'5px',
    color:'#CB218E',
    cursor:'pointer'
},
gridItemContainer: {
    height:'100vh',
    display: 'flex',
    padding:'0px',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    background:'linear-gradient(to right bottom, #CB218E, #6617CB)'
},
paperContainer: {
    backgroundColor: '#fcfcfc',
    height: '100vh',
    display: 'flex',
    paddingTop: '5vh',
    justifyContent:'start',
    alignItems:'center',
    flexDirection:'column',
},
dashboardGrid: {
    height:'100vh',
    display: 'flex',
    padding:'50px',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    background:'linear-gradient(to right bottom, #CB218E, #6617CB)'
}
})

export default useStyles