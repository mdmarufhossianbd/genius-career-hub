
import useCategories from "@/app/hooks/useCategory";
import CustomLoading from "@/components/shared/customLoading";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";

const SelectCategory = ({setCategory}) => {
    const [categories, isLoading] = useCategories();
    
    return (
        <div>
            <Select className="" onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="border border-black">
                    <SelectValue className="text-white" placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((category, idx) => (
                            <SelectItem key={idx} value={category.categoryName}>{category.categoryName}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            <CustomLoading isLoading={isLoading}/>
        </div>
    );
};

export default SelectCategory;