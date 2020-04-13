import React from 'react';


const FileUpload = ({ title }) => {
    return (
        <div className="tc">
            <h2>{title}</h2>
            <div className="w-60-ns pa2 tl dib ba br0 ma2 bw1 shadow-1">
                <form className="form-block">
                    <input type="file" id="myFile" name="filename" />

                    <button className="btn btn-primary" type='submit'>
                        Upload
                    </button>

                </form>
            </div>
        </div>
    )
}

export default FileUpload;