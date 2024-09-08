import useCategories from "@/app/hooks/useCategory";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";

const EditCategory = ({ category, setCategory }) => {
    const [categories] = useCategories();

    return (
        <Select defaultValue={category} onValueChange={(value) => setCategory(value)}>
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
    );
};

export default EditCategory;