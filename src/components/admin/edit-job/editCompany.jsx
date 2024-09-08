import useCompanies from "@/app/hooks/useCompany";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EditCompany = ({ company, setCompany }) => {
    const [companies] = useCompanies()

    return (
        <Select defaultValue={company} onValueChange={(value) => setCompany(value)}>
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
    );
};

export default EditCompany;