import { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
import '../index.css'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { supabase } from '../lib/supabaseClient'

interface DataType {
    id: number;
    nickname: string;
    interpretations: string[];
}

function ContentsArea() {
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('tat_basic')
                .select('*');
            if (error) {
                console.error(error);
            } else {
                setData(data);
                console.log(data);
            }
        };
        fetchData();
    }, []);

return (
    <>
    <Accordion className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6' type="single" collapsible>
    {data.map((item: DataType) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger className='bg-white shadow'>{item.nickname}</AccordionTrigger>
                    {item.interpretations.map((interpretation: string, index: number) => (
                        <AccordionContent key={index} className='text-start'>
                            img{index+1} - {interpretation}
                        </AccordionContent>
                    ))}
                </AccordionItem>
            ))}
    </Accordion>

    </>
)
}

export default ContentsArea;
