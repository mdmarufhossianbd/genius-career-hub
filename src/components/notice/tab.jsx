'use client'

import { useState } from "react";
import { Button } from "../ui/button";
const Tab = () => {
    const [activeTab, setActiveTab] = useState('general')



    return (
        <div>
            <div className="flex gap-4">
                <Button onClick={() => setActiveTab('general')} className={`${activeTab === 'general' && 'bg-blue-500'}`}>General Notice</Button>
                <Button onClick={() => setActiveTab('exam')} className={`${activeTab === 'exam' && 'bg-blue-500'}`}>Exam Notice</Button>
                <Button onClick={() => setActiveTab('admit')} className={`${activeTab === 'admit' && 'bg-blue-500'}`}>Admit Notice</Button>
                <Button onClick={() => setActiveTab('result')} className={`${activeTab === 'result' && 'bg-blue-500'}`}>Result Notice</Button>
            </div>
            <div className="border rounded my-5 py-5">
                {
                    activeTab === 'general' &&
                    <>


                        <div className="p-8 mx-5 rounded-2xl border-b flex items-center justify-between">
                            <div className="w-[85%]">
                                <h2 className="font-semibold mb-2">সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</h2>
                                <p>Published Date : 10 / 10 / 2024</p>
                            </div>
                            <div className="w-[15%] flex items-center justify-center">
                                <Button>See Details</Button>
                            </div>
                        </div>


                        <div className="p-8 mx-5 rounded-2xl border-b flex items-center justify-between">
                            <div className="w-[85%]">
                                <h2 className="font-semibold mb-2">সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</h2>
                                <p>Published Date : 10 / 10 / 2024</p>
                            </div>
                            <div className="w-[15%] flex items-center justify-center">
                                <Button>See Details</Button>
                            </div>
                        </div>
                    </>
                }
                {
                    activeTab === 'exam' && <>
                        <div className="p-8 mx-5 rounded-2xl border-b flex items-center justify-between">
                            <div className="w-[85%]">
                                <h2 className="font-semibold mb-2">সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</h2>
                                <p>Published Date : 10 / 10 / 2024</p>
                            </div>
                            <div className="w-[15%] flex items-center justify-center">
                                <Button>See Details</Button>
                            </div>
                        </div>
                    </>
                }
                {
                    activeTab === 'admit' && <>
                        <div className="p-8 mx-5 rounded-2xl border-b flex items-center justify-between">
                            <div className="w-[85%]">
                                <h2 className="font-semibold mb-2">সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</h2>
                                <p>Published Date : 10 / 10 / 2024</p>
                            </div>
                            <div className="w-[15%] flex items-center justify-center">
                                <Button>See Details</Button>
                            </div>
                        </div>
                    </>
                }
                {
                    activeTab === 'result' && <>
                        <div className="p-8 mx-5 rounded-2xl border-b flex items-center justify-between">
                            <div className="w-[85%]">
                                <h2 className="font-semibold mb-2">সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর সাটঁ মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর</h2>
                                <p>Published Date : 10 / 10 / 2024</p>
                            </div>
                            <div className="w-[15%] flex items-center justify-center">
                                <Button>See Details</Button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Tab;