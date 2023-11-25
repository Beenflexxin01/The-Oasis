import Button from "../../ui/Button";
import {useCheckOut} from './useCheckOut'
function CheckoutButton({ bookingId }) {
  const {checkinOut, isCheckingOut} = useCheckOut()
  return (
    <Button variation="primary" size="small" onClick = {() => checkinOut(bookingId)} disabled={isCheckingOut}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
