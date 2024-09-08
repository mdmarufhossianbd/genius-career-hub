"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const EditDateline = ({newJobDeadline, setJobDeadline}) => {    

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full border-black justify-start text-left font-normal bg-transparent hover:bg-transparent",
                            !newJobDeadline && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newJobDeadline ? format(newJobDeadline, "PPP") : <span>Select Deadline</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={newJobDeadline}
                        onSelect={setJobDeadline}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default EditDateline;