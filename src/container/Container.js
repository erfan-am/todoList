import React, { Component, useState } from 'react';
import Item from '../components/Text'
import { connect } from 'react-redux'
import {textSet,deleteText,Low,High,Medium,editeEnter} from '../redux/Texts/Text-action'
const Container =({texts,Low,High,Medium,fontSize,fontName,textSet,deleteText,editeEnter})=> {
   
const [task ,setText]=useState({text:'',title:''})
    
const onChangeHandle=(e)=>{
   setText({...task ,[e.target.name]:e.target.value})
  }
const createMessge=(title,text)=>{
   if(title !=='' && text!==''){
    let item={ 
      title:title,
      id:Math.random().toString(),
      fontSize:fontSize,
      fontName:fontName,
      text:text
  }
      textSet(item)
      setText({title:'',text:''})
   }
}
 const EditeMwessage=(item)=>{
    setText(item)
}

return (
            <div className="container">
                <div>
                  <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Wright Your Text</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                              <div className="input-group">
                                  <input className="form-control" 
                                  type="text" 
                                  onChange={onChangeHandle} 
                                  placeholder="Task Title" 
                                  name="title" 
                                  value={task.title} />
                              </div>
                              <div className="input-group">
                                  <textarea className="form-control mt-3"  
                                  onChange={onChangeHandle} 
                                  placeholder="Task Description" 
                                  name="text" 
                                  value={task.text }>
                                  </textarea>
                              </div>
                          </form>
                          <div className="button-group">
                          fontSize:{fontSize}
                              <button onClick={()=>Low()} className="btn btn-success">Low</button>
                              <button onClick={()=>Medium()} className="btn btn-primary">Mediun</button>
                              <button onClick={()=>High()} className="btn btn-danger">High</button>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button"   className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button"  onClick={()=>createMessge(task.title,task.text)} className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
               {texts.length > 0 ?  <div className="col text-part">
                    <Item editeEnter={editeEnter} texts={texts} EditeMwessage={EditeMwessage} deleteText={deleteText} />
                </div> : <h3>There is no text</h3>}
                <button className="btn btn-warning m-2 p-3 " data-toggle="modal" data-target="#exampleModal">Create Text</button>

            </div>
        )
    
}
const mapState=({text})=>({
    texts:text.texts,
    fontName:text.fontName,
    fontSize:text.fontSize
})

export default  connect(mapState,{textSet,deleteText,Low,Medium,High,editeEnter})(Container)
