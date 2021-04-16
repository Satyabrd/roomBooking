import React,{useState} from 'react'
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import './linehook.css'
import { $CombinedState } from 'redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import $ from 'jquery'

function Line(props){
    return(
        <div className="Line">
            <div className="lineElem">
                <span>
                    <Icon className="iconSpace blueIcon">{props.entityIcon}</Icon>
                    <span className="entity">
                        <strong>{props.entityName}</strong>
                    </span>
                </span>
                <span className="buttonGroup">
                    {props.setValue==0 && props.id!="room" && (<IconButton id="subractButton" disabled color="primary" onClick={(evt)=>{props.subtractionFunc(evt,props.id)}}><RemoveCircleIcon/></IconButton>)}
                    {props.setValue != 0 && props.id!="room" && (<IconButton id="subractButton" color="primary" onClick={(evt)=>{props.subtractionFunc(evt,props.id)}}><RemoveCircleIcon/></IconButton>)}
                    {props.setValue != 1 && props.id=="room" && (<IconButton id="subractButton" color="primary" onClick={(evt)=>{props.subtractionFunc(evt,props.id)}}><RemoveCircleIcon/></IconButton>)}
                    {props.setValue==1 && props.id=="room" && (<IconButton id="subractButton" disabled color="primary" onClick={(evt)=>{props.subtractionFunc(evt,props.id)}}><RemoveCircleIcon/></IconButton>)}
                    <strong>{props.setValue}</strong>
                    <IconButton id="addButton" onClick={(evt)=>props.additionFunc(evt,props.id)}><Icon className="redIcon">add_circle</Icon></IconButton>
                </span>                    
            </div>
        </div>
    )
}

export default Line