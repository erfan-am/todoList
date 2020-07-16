import *as actionTypes from '../actiontypes';

export const textSet=(text)=>({
    type:actionTypes.TEXTS,
    payload:text
})


export const deleteText=(text)=>({
    type:actionTypes.DELETE_TEXT,
    payload:text
})


export const Low=()=>({
    type:actionTypes.FONT_LOW
})

export const Medium=()=>({
    type:actionTypes.FONT_MEDIUM
})

export const High=()=>({
    type:actionTypes.FONT_HIGH
})


export const editeEnter=(item)=>({
    type:actionTypes.EDITE_ENTER,
    payload:item
})