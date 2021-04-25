import React, { useState } from 'react'

function Upload() {

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState();
    const [selectedFile, setSelectedFile] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);

    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        // uploadImage(previewSource);
    }
    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={handleSubmitFile} >
                <input type="file"
                    name='image'
                    // onChange={} 
                    value={fileInputState}
                    className="form-input" />
                <button className='btn' type="button">Submit</button>
            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen"
                    style={{ height: '300px' }} />
            )}
        </div>
    );
}

export default Upload
