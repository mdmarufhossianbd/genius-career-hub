"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const SelectJobDeadline = ({jobDeadline, setJobDeadline}) => {
    // const [date, setDate] = useState()
    

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full border-black justify-start text-left font-normal bg-transparent hover:bg-transparent",
                            !jobDeadline && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {jobDeadline ? format(jobDeadline, "PPP") : <span>Select Deadline</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={jobDeadline}
                        onSelect={setJobDeadline}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default SelectJobDeadline;