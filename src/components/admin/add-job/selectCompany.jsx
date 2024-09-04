import useCompanies from "@/app/hooks/useCompany";
import CustomLoading from "@/components/shared/customLoading";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const SelectCompany = ({setCompany}) => {
    const [companies, isLoading] = useCompanies()
    
    return (
        <div>
            <Select className="" onValueChange={(value) => setCompany(value)}>
                <SelectTrigger className="border border-black">
                    <SelectValue className="text-white" placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                    {
                        companies.map((company, idx) => (
                            <SelectItem key={idx} value={company?.name}>{company?.name}</SelectItem>
                        ))
                    }                    
                </SelectContent>
            </Select>
            <CustomLoading isLoading={isLoading}/>
        </div>
    );
};

export default SelectCompany;