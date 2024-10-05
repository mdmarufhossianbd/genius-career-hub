import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EditLocation = ({ location, setLocation }) => {
    return (
        <Select defaultValue={location} onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="border border-black">
                <SelectValue className="text-white" placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Barishal">Barishal</SelectItem>
                <SelectItem value="Chattogram">Chattogram</SelectItem>
                <SelectItem value="Dhaka">Dhaka</SelectItem>
                <SelectItem value="Khulna">Khulna</SelectItem>
                <SelectItem value="Mymensingh">Mymensingh</SelectItem>
                <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                <SelectItem value="Rangpur">Rangpur</SelectItem>
                <SelectItem value="Anywhere in Bangladesh">Anywhere in Bangladesh</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default EditLocation;