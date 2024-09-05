import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectLocation = ({setLocation}) => {
    return (
        <div>
            <Select className="" onValueChange={(value) => setLocation(value)}>
                <SelectTrigger className="border border-black">
                    <SelectValue className="text-white" placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Barisal">Barisal</SelectItem>
                    <SelectItem value="Chittagong">Chittagong</SelectItem>
                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                    <SelectItem value="Khulna">Khulna</SelectItem>
                    <SelectItem value="Mymensingh">Mymensingh</SelectItem>
                    <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="Rangpur">Rangpur</SelectItem>                    
                    <SelectItem value="Anywhere in Bangladesh">Anywhere in Bangladesh</SelectItem>                    
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectLocation;