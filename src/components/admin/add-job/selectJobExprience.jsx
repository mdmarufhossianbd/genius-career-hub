import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectJobType = () => {
    return (
        <div>
            <Select className="">
                <SelectTrigger className="bg-black text-white text-center">
                    <SelectValue className="text-white" placeholder="Select Job Exprience" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectJobType;