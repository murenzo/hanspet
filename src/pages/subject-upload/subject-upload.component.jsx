import React from 'react';

import FileUpload from '../../components/file-upload/file-upload.component';

const SubjectUpload = () => {
    return (
        <div className="tc">
            <h2>Academic Subject Upload</h2>
            <FileUpload title="Academic" />
            <FileUpload title="Non Academic" />
        </div>
    )
}

export default SubjectUpload;