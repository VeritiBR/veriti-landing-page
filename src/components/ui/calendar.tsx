import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

function CustomPreviousButton(props: any) {
  return (
    <button {...props}>
      <ChevronLeft className="h-4 w-4" />
    </button>
  );
}

function CustomNextButton(props: any) {
  return (
    <button {...props}>
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function Calendar(props: any) {
  return (
    <DayPicker
      components={{
        PreviousMonthButton: CustomPreviousButton,
        NextMonthButton: CustomNextButton,
      }}
      {...props}
    />
  );
}

export { Calendar }