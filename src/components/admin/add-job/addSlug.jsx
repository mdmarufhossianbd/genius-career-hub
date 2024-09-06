'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconReload } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";

const AddSlug = ({suggestSlug, setUniqueSlug, slugValid, setSlugValid}) => {
    const [loading, setLoading] = useState(false);    
    const [slug, setSlug] = useState();
    
    const handleSlug = async() => {
        try {
            setLoading(true)        
            await axios.post('/api/v1/make-slug', {slug})
            .then(res => {
                if(res.data.success){
                    setUniqueSlug(res.data?.data)
                    setSlugValid(true)
                    setLoading(false)
                } else{
                    setSlugValid(false)
                    setLoading(false)
                }
            })
        } catch (error) {
            setLoading(false)
        }      
    }

    return (
        <div>
            <p>Slug</p>
            <div className="flex">
                <Input defaultValue={suggestSlug} placeholder='Enter slug' onChange={(e) => setSlug(e.target.value)} />
                <Button className={`${slugValid && 'bg-green-500 text-white hover:text-black'}`} variant={slugValid ? 'secondary' : 'destructive'} onClick={handleSlug}>
                    {
                        slugValid === null ? 'Check Slug' :
                        loading ? <span className="flex items-center gap-2">Checking <IconReload className="animate-spin" stroke={2} /> </span> :
                        slugValid ? 'Valid Slug' :
                        'Already Used'
                    }                    
                </Button>
            </div>
        </div>
    );
};

export default AddSlug;