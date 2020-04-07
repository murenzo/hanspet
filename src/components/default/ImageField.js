import React from 'react';
import PasswordField from './PasswordField';

function ImageField({onChange, src, name, type, placeholder, required, tag, children, value}) {
    const handleChange =(e)=>{
        onChange(e);
    }

    var mainTag = null;
    switch (tag) {
        case "i":
            mainTag = <input type={type} 
            placeholder={placeholder} 
            required={required} 
            name={name} 
            defaultValue={value}
            onChange={handleChange} />
            break;
        case "s":
            mainTag = <select 
            required={required} 
            name={name} 
            defaultValue={value}
            onChange={handleChange}>{children}</select>
            break;
        case "t":
            mainTag = <textarea 
            placeholder={placeholder} 
            required={required} 
            name={name} 
            defaultValue={value}
            onChange={handleChange} />
            break;
        case "p":
            mainTag = <PasswordField 
            placeholder={placeholder} 
            required={required} 
            name={name}
            onChange={handleChange} />
            break;
        default:
            mainTag = <input type={type} 
            placeholder={placeholder} 
            required={required} 
            name={name} 
            defaultValue={value}
            onChange={handleChange} />
            
            break;
    }
    
    return(
        <div className="img-form">
            <img src={src} alt="input-img" />
            {mainTag}
        </div>
    );
}

export default ImageField;