import React, { Component } from 'react'

export default class componentName extends Component {
     onChangeHandler=(item)=>{
       const {EditeMwessage,editeEnter}=this.props
        EditeMwessage(item)
        editeEnter(item)
     }
    render() {
       const {texts,deleteText}=this.props
        return (
          <div className="border p-2" style={{width:'80%'}}>
                {
                texts !==''  && texts.map(text=>(
                 <div key={text.id} className=" p-2  font-weight-bold mt-2  border" style={{fontSize:text.fontSize !==''  ? text.fontSize :'15px'}}>
                            <span>Title: { text.title}</span>
                            <p>{text.text}</p>
                            <div className="button-group">
                            <button  data-toggle="modal" data-target="#exampleModal" onClick={()=>this.onChangeHandler(text)} className="btn btn-success">Edite</button>
                            <button onClick={()=>deleteText(text)} className="btn btn-danger">Delete</button>
                            <span className="btn btn-info">FontSize : {text ? text.fontName : 'Medium'}</span>
                            </div>
                     </div>
                ))   
               }
          </div>
        )
    }
}
