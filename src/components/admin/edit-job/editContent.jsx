import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const EditContent = ({description, setDescription}) => {
    const editor = useRef(null)
    const [content, setContent] = useState(description)

    const handleContent = (newContent) => {
        setContent(newContent)
        setDescription(content)
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            onBlur={(newContent) => handleContent(newContent)}
        />
    );
};

export default EditContent;