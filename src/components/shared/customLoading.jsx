import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Image from "next/image";
import LoadImg from '../../../public/assets/loading.gif';
const CustomLoading = ({isLoading}) => {
    return (
        <div>
            <AlertDialog open={isLoading}>
                <AlertDialogTrigger></AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle></AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="flex items-center justify-center py-10">
                                <Image src={LoadImg} alt="loading" width={100} height={100} />
                                <p>Please wait .... data is loading</p>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>                    
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
};

export default CustomLoading;