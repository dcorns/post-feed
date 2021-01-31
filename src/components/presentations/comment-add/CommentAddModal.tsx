/**
 * CommentAddModal
 * Created by dcorns on 1/20/21
 * Copyright © 2021 Dale Corns
 */
import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import UserInput from '../user-input/UserInput';

const CommentAddModal = (props: any) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
   return (
       <>
           <Modal show={props.show} onHide={props.onHide}>
               <form>
               <Modal.Header closeButton>
                   <Modal.Title>Modal heading</Modal.Title>

               </Modal.Header>
               <Modal.Body>
                   <UserInput name={'Email'} label={'Email'} placeholder={'email'} type={'email'} required={true} onChange={(e:any) => setEmail(e.target.value)}/>
                   <UserInput name={'Name'} label={'Title'} placeholder={'title'} onChange={(e:any) => setName(e.target.value)}/>
                   <UserInput name={'Body'} label={'Comment'} placeholder={'comment here'} area={true} onChange={(e:any) => setBody(e.target.value)}/>
               </Modal.Body>
               <Modal.Footer>
                   <button type="submit" className="btn btn-primary" onClick={(e)=>{
                       e.preventDefault();
                       props.onSaveButtonClick({email,name,body})}}>
                       Save
                   </button>
                   <button className="btn btn-warning" onClick={(e)=>{
                       e.preventDefault();
                       props.onCancelButtonClick()}}>
                       Cancel
                   </button>
               </Modal.Footer>
           </form>
           </Modal>
       </>
   );

}

export default CommentAddModal