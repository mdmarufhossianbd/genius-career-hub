import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SelectJobType = ({setJobType}) => {
    return (
        <div className="">
            <Select className="" onValueChange={(value => setJobType(value))}>
                <SelectTrigger className="border border-black text-center">
                    <SelectValue className="text-white" placeholder="Select Job Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Full Time">Full Time</SelectItem>
                    <SelectItem value="Part Time">Part Time</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Hybride">Hybride</SelectItem>                    
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectJobType;