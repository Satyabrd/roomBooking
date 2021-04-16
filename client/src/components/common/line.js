import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import css from './line.less'
import { $CombinedState } from 'redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import $ from 'jquery'


class Line extends Component{
    constructor(props){
        super(props)
    }
    /*componentDidMount(){
        if(this.props.setValue == 0){
            $("#subractButton").prop('disabled',true)
            //$("#subtractIcon").prop('disabled',true)
        }else{
            $("#subractButton").prop('disabled',false)
            //$("#subtractIcon").prop('disabled',false)
        }
    }

    componentDidUpdate(){
        if(this.props.setValue == 0){
            $("#subractButton").prop('disabled',true)
            //$("#subtractIcon").prop('disabled',true)
        }else{
            $("#subractButton").prop('disabled',false)
            //$("#subtractIcon").prop('disabled',false)
        }
    }*/
    
    render(){
        const baseclass = css
        return(
            <div classname={baseclass}>
                <div className="lineElem">
                    <span>
                        <Icon className="iconSpace blueIcon">{this.props.entityIcon}</Icon>
                        <span className="entity">
                            <strong>{this.props.entityName}</strong>
                        </span>
                    </span>
                    <span className="buttonGroup">
                        {this.props.setValue==0 && this.props.id!="room" && (<IconButton id="subractButton" disabled color="primary" onClick={(evt)=>{this.props.subtractionFunc(evt,this.props.id)}}><RemoveCircleIcon/></IconButton>)}
                        {this.props.setValue != 0 && this.props.id!="room" && (<IconButton id="subractButton" color="primary" onClick={(evt)=>{this.props.subtractionFunc(evt,this.props.id)}}><RemoveCircleIcon/></IconButton>)}
                        {this.props.setValue != 1 && this.props.id=="room" && (<IconButton id="subractButton" color="primary" onClick={(evt)=>{this.props.subtractionFunc(evt,this.props.id)}}><RemoveCircleIcon/></IconButton>)}
                        {this.props.setValue==1 && this.props.id=="room" && (<IconButton id="subractButton" disabled color="primary" onClick={(evt)=>{this.props.subtractionFunc(evt,this.props.id)}}><RemoveCircleIcon/></IconButton>)}
                        <strong>{this.props.setValue}</strong>
                        <IconButton id="addButton" onClick={(evt)=>this.props.additionFunc(evt,this.props.id)}><Icon className="redIcon">add_circle</Icon></IconButton>
                    </span>
                    
                </div>
                
            </div>
        )
    }
}

export default Line