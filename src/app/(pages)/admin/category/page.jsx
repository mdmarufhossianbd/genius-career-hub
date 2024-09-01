"use client"
import AddCategoryModal from "@/components/admin/addCategoryModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Category = () => {
    const [keyword, setKeyword] = useState();
    return (
        <div className="px-5">
            {/* This is category route. In this page add category, update and delete also.
            1. add icon of category (not confirm) */}
            <h2 className="text-5xl font-semibold text-center my-10">Category </h2>
            <div className="flex justify-between">
                {/* add category */}
                <div>
                    <AddCategoryModal />
                </div>

                {/* search category */}
                <div className="flex w-1/2 justify-end">
                    <input onChange={(e) => setKeyword(e.target.value)} className="focus:outline-none border-t border-l border-b rounded-l-full pl-4" placeholder="Search Category" />
                    <Button disabled={!keyword} className="rounded-r-full border-t border-r bg-blue-300 text-black hover:bg-blue-400 hover:text-white duration-150 border-b px-5">Search</Button>
                </div>
            </div>
        </div>
    );
};

export default Category;