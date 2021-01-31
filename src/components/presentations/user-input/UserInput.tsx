/**
 * UserInput
 * Created by dcorns on 1/18/21
 * Copyright © 2021 Dale Corns
 */
import React, {ChangeEvent} from 'react';

const TextInput = (props: any) => {
    let wrapClass = `form-group ${(props.error && props.error.length > 0)?'has-error':''}`;
    if (props.area){
        return (
            <div className={wrapClass}>
                <label htmlFor={props.name}>{props.label}</label>
                <div className={'field'}>
                    <textarea name={props.name} className={'form-control'} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required={props.required}/>
                    {props.error && <div className={'alert alert-danger'}>{props.error}</div>}
                </div>

            </div>
        );
    }else{
        return (
            <div className={wrapClass}>
                <label htmlFor={props.name}>{props.label}</label>
                <div className={'field'}>
                    <input type={props.type || 'text'} name={props.name} className={'form-control'} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required={props.required}/>
                    {props.error && <div className={'alert alert-danger'}>{props.error}</div>}
                </div>

            </div>
        );
    }
}
export default TextInput;
