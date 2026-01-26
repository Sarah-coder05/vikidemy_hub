import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
interface CustomAccordionProps {
  itemValue: string;
  question: string;
  answer: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  itemValue,
  question,
  answer,
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={itemValue}>
        <AccordionTrigger>
          {question}{" "}
          <PlusCircleIcon className="h-4 w-4 text-grey-400 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
          <MinusCircleIcon className="h-4 w-4 text-grey-400 shrink-0 transition-transform duration-200 group-data-[state=closed]:hidden" />
        </AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
