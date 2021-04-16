import React,{Component,useState,useEffect,useRef} from 'react'
import Line from '../../common/lines/linehook'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import './dashboardhooks.css'

function Dashboard(props){
    const [roomNo,setRoomNo] = useState(1)
    const [adultNo,setAdultNo] = useState(2)
    const [childrenNo, setChildrenNo] = useState(0)
    const reference = useRef(null);
    useEffect(() => {
        console.log("prevState is::",reference,reference.current)
    },[roomNo,adultNo])
    const clickOnAdd = (evt,id)=>{
        console.log("id is::",id)
        if(id=="room"){
            setRoomNo(roomNo + 1)
        }else if(id=="adult"){
            setAdultNo(adultNo + 1)
        }else if(id=="child"){
            setChildrenNo(childrenNo + 1)
        }else{

        }
    }

    const clickOnSubtract = (evt,id) => {
        if(id=="room"){
            setRoomNo(roomNo - 1)
        }else if(id=="adult"){
            setAdultNo(adultNo - 1)
        }else if(id=="child"){
            setChildrenNo(childrenNo - 1)
        }else{
            
        }
    }
    const buildComponent = () =>{
        return(
            <div>
                <hr/>
                <Line id="room" subtractionFunc={clickOnSubtract} additionFunc={clickOnAdd} entityIcon="room" entityName="Room" setValue={roomNo}></Line>
                <hr/>
                <Line id="adult" subtractionFunc={clickOnSubtract} additionFunc={clickOnAdd} entityIcon="person" entityName="Adult" setValue={adultNo}></Line>
                <hr/>
                <Line id="child" subtractionFunc={clickOnSubtract} additionFunc={clickOnAdd} entityIcon="child_care" entityName="Children" setValue={childrenNo}></Line>
                <hr/>
            </div>
        );
    }
    

    return(
        <div ref={reference}>
            <Container className="dashboardLayout" maxWidth="sm">
                <Card variant="outlined" className="cardClass">
                    <CardContent>
                    <Typography className="blueIcon" gutterBottom>
                        <Icon className="blueIcon iconSpace">people</Icon>Choose number of <strong>people</strong>
                    </Typography>
                        <Typography>
                            {buildComponent()}
                        </Typography>
                    </CardContent>                       
                </Card>
            </Container>
        </div>
    )
}

export default Dashboard