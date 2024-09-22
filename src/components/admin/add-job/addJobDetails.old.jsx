"use client"
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

const AddJobDetails = ({setDescription}) => {
    const editorRef = useRef(null);
    const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY
    const content = () => {
        if (editorRef.current) {
            setDescription(editorRef.current.getContent());
        }
    };
    return (
        <>
            <p className='mb-2'>Job Description</p>
            <Editor                
                onKeyUp={content}
                apiKey={apiKey}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="Type or paste your content here!"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'markdown',
                        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                        'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                }}
            />
        </>
    );
};

export default AddJobDetails;