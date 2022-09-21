
import { StyleSheet } from 'react-native';



export const ProfileStyles = StyleSheet.create({


  headers: {

    backgroundColor:'#2ECC71',
    height:80,
    display:"flex",
    flexDirection:"row",

    padding:18,
    position:"relative",
  },
  headContainer: {
    marginBottom:3,
    // textAlign:"center",
    // alignItems:"center"
  },
  logo: {
    justifyContent:"center"

  },
  regisText: {
    fontWeight:"bold",
    fontSize: 22,
    marginBottom:18,
  },

  headText: {
    display:"flex",
    // justifyContent:"center",
    marginBottom:10,
    fontWeight:"bold",
    fontSize:15

  },
  formContainer: {
    display:"flex",
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center',


  },
  greenButton: {
    // width: 150,
    height: 50,
    backgroundColor: '#2ECC71',
    borderRadius: 6,
    color: '#ffffff',
   justifyContent:"center",
    padding: 15,
    flexDirection: 'row',
   
    // alignItems: 'center'

  },
  whiteText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight:"bold",
    color: '#FFFFFF'
  },
  bgContainer1: {
    display: 'flex',
    backgroundColor: '#2ECC71',
    backgroundSize: 'cover',
    // width: 415,
    height:195,
    position: 'relative'

  },


  headerText: {
    // fontFamily: "NotoSans-Bold",
     fontWeight:"bold",
    fontSize: 18,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 1,
    marginTop:1,
    marginLeft:6,
  },
  imgBg: {
    width: 89,
    height: 89,
    /* left: 135; */
    /* top: 59; */
    backgroundColor: '#702cc7',
    borderRadius: 14,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  camera: {
    position: 'absolute',
    width: 34,
    height: 34,
    left: 64,
    top: 58,
    backgroundColor: '#702cc7',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabAlign: {
    display: 'flex',
    justifyContent: 'center',



  },
  tabBg: {
    // width: 415,
    backgroundColor: '#F1ECFB',
    // paddingTop: 14,
    // paddingBottom: 14,
    


  },
  tabsView: {
    height: 60,
    /* left: 0; */
    /* top: 0; */
    backgroundColor: '#F1ECFB',
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 400,
  },

  tabsText: {
    color: '#323232',

  },
  tabsPane: {
    width: 375,
    // height: 490,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center'
  },
  tabsPaneHeading: {

    // fontFamily: "NotoSans-Black",
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#323232'
  },
  inputBox: {
  width:310,
    height: 50,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    marginBottom: 0
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    width: 163,
    height: 52,
    marginRight: 11,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,

    fontSize: 19,

    borderRadius: 10

  },
  saveBtn: {
    backgroundColor: "#702cc7",

  },
  nextBtn: {
    backgroundColor: "#2ecb71",

  },
  titleHeading: {
    textAlign: "center",
    marginBottom:23

  },
  profileBg: {
    position: "absolute",
    top: 198,
    height: 200,
    // width: 382,
    backgroundColor: "white"

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    // width: 379,
    height: 300,
    // marginBottom:17,
    backgroundColor: '#f1f1f1',
    // margin: '100 auto 0'


  },
  content: {
    backgroundColor: 'white',
    overflowY: 'scroll',
    padding: 10,
    // width: "90vw",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    // marginTop:10,
    height:790,
    
    // textAlign:"center",

    
  },
  forgot_button: {
    height: 30,
    marginTop: 12,
    marginRight:40
  },




})