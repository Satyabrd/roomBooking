import React,{Component} from 'react'
import Line from '../common/line'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import './dashboard.css'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            roomNo : 1,
            adultNo : 2,
            childrenNo : 0
        }
    }

    clickedOnAddition=(evt,id)=>{
        console.log("evt2 is::",evt)
        if(id=="room"){
            if(this.state.adultNo-1 < this.state.roomNo){
                console.log("this.state is::",this.state)
                this.setState({
                    ...this.state,
                    adultNo: this.state.adultNo + 1,
                    roomNo: this.state.roomNo + 1
                })
                console.log("this.state is::",this.state)
            }else{
                this.setState({
                    ...this.state,
                    roomNo: this.state.roomNo + 1
                })
            }

        }else if(id=="adult"){
            if(this.state.adultNo + this.state.childrenNo > this.state.roomNo*4){
                this.setState({
                    ...this.state,
                    adultNo: this.state.adultNo + 1,
                    roomNo: this.state.roomNo + 1
                })
            }else{
                this.setState({
                    ...this.state,
                    adultNo: this.state.adultNo + 1
                })
            }
        }else if(id=="child"){
            this.setState({
                ...this.state,
                childrenNo: this.state.childrenNo + 1
            })
        }else{

        }
    }
    clickedOnSubtraction = (evt,id)=>{
        if(id=="room"){
            if(this.state.adultNo + this.state.childrenNo > this.state.roomNo*4){
                if(((this.state.adultNo + this.state.childrenNo)-(4*this.state.roomNo))>= this.state.childrenNo){
                    this.setState({
                        ...this.state,
                        roomNo: this.state.roomNo - 1,
                        childrenNo: 0
                    })
                }else if(((this.state.adultNo + this.state.childrenNo)-(4*this.state.roomNo)) < this.state.childrenNo){
                    this.setState({
                        ...this.state,
                        roomNo: this.state.roomNo - 1,
                        childrenNo: this.state.childrenNo -((this.state.adultNo + this.state.childrenNo)-(4*this.state.roomNo)),
                        adultNo: this.state.adultNo
                    })
                }
            }else{
                this.setState({
                    ...this.state,
                    roomNo: this.state.roomNo - 1
                })
            }
        }else if(id=="adult"){
            this.setState({
                ...this.state,
                adultNo: this.state.adultNo - 1
            })
        }else if(id=="child"){
            this.setState({
                ...this.state,
                childrenNo: this.state.childrenNo - 1
            })
        }else{
            
        }
    }

    buildComponent = ()=>{
        return(
            <div>
                <hr/>
                <Line id="room" subtractionFunc={this.clickedOnSubtraction} additionFunc={this.clickedOnAddition} entityIcon="room" entityName="Room" setValue={this.state.roomNo}></Line>
                <hr/>
                <Line id="adult" subtractionFunc={this.clickedOnSubtraction} additionFunc={this.clickedOnAddition} entityIcon="person" entityName="Adult" setValue={this.state.adultNo}></Line>
                <hr/>
                <Line id="child" subtractionFunc={this.clickedOnSubtraction} additionFunc={this.clickedOnAddition} entityIcon="child_care" entityName="Children" setValue={this.state.childrenNo}></Line>
                <hr/>
            </div>
        );
    }

    render(){
        return(
            <div>
                <Container className="dashboardLayout" maxWidth="sm">
                    <Card variant="outlined" className="cardClass">
                        <CardContent>
                        <Typography className="blueIcon" gutterBottom>
                            <Icon className="blueIcon iconSpace">people</Icon>Choose number of <strong>people</strong>
                        </Typography>
                            <Typography>
                                {this.buildComponent()}
                            </Typography>
                        </CardContent>                       
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Dashboard