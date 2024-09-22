'use client'
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';

const AddContent = ({setDescription}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    
    const handleContent = (newContent) => {
        setContent(newContent)
        setDescription(content)
    }

    return (
        <JoditEditor
        ref={editor}
        value={content}
        // onChange={(newContent) => setContent(newContent)}
        onBlur={(newContent) => handleContent(newContent)}
        />
            
        
    );
};

export default AddContent;