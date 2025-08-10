import { Button } from "react-bootstrap";
import { cn } from "../utils/helpers";


function ButtonComponent(props: any) {

  return (
    <Button
      variant="dark"
      disabled={props.disabled}
      style={props?.style}
      onClick={props.handleButtonClick}
      className={cn("w-full max-w-[300px] mx-auto !px-12 min-h-13 !rounded-full !bg-[#ff769a] border-0",props?.className)}
    >
      {props.loading ? "Please wait..." : props?.buttonText}
    </Button>
  );
}

export default ButtonComponent;
