import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import Link from "next/link";


const ViewNotice = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>View Details</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Notice Title</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div>
                            <p>সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</p>
                            <Link href={'/'} target="_blank" className="px-4 py-1 rounded bg-[#1e508c] text-white hover:bg-[#2970c7] w-1/4 flex gap-1">Check PDF</Link>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='absolute top-2 right-0 bg-white hover:bg-white border-none shadow-none'><IconSquareRoundedXFilled className="text-[#1e508c]" /></AlertDialogCancel>
                    {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
};

export default ViewNotice;