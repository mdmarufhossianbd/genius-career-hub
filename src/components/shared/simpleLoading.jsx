import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Image from "next/image";
import saveLoading from '../../../public/assets/save_loading.gif';
const SimpleLoading = ({loading}) => {
    return (
        <>
            <AlertDialog open={loading}>
                <AlertDialogTrigger></AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle></AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="flex flex-col items-center justify-center py-10">
                                <Image src={saveLoading} alt="loading" width={100} height={100} />
                                <p>Please wait .... job is saveing</p>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>                    
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default SimpleLoading;