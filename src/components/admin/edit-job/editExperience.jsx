"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";


const EditExperience = ({experince, experinceDuration, setExperince, setExperinceDuration}) => {
    const [experinceYes, setExperinceYes] = useState();

    const handleSetExperience = (value) =>{
        setExperinceYes(value)
        setExperince(value)
    }
    
    return (
        <div>
            <Select defaultValue={experince} onValueChange={(value) => handleSetExperience(value)}>
                <SelectTrigger className="border border-black">
                    <SelectValue className="" placeholder="Select Experience" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>                
                    <SelectItem value="No">No</SelectItem>                
                </SelectContent>
            </Select>
            
            {
                experinceYes === "Yes" && <Input onChange={(e) => setExperinceDuration(e.target.value)} defaultValue={experinceDuration} className="border-black mt-3" placeholder="Enter Experince" /> 
            }
        </div>
    );
};

export default EditExperience;