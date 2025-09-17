import { useEffect, useState } from "react";
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useQueryBookings } from "../bookings/useQueryBookings";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useChecking } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakFast, setAddBreakFast] = useState(false);
  const { bookings, isLoading, error } = useQueryBookings();
  const { checkIn, isCheckingIn } = useChecking();

  useEffect(
    function () {
      setConfirmPaid(bookings?.isPaid ?? false);
    },
    [bookings]
  );
  const moveBack = useMoveBack();

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = bookings || {};

  const { isLoading: isLoadingSettings, data: settings } = useSettings();

  const optinalBreakfastPrice = settings?.breakfastPrice;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakFast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optinalBreakfastPrice,
          totalPrice: totalPrice + optinalBreakfastPrice,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  if (isLoading || isLoadingSettings) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={bookings} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakFast}
            onChange={() => {
              setAddBreakFast((addBreakFast) => !addBreakFast);
              setConfirmPaid(false);
            }}
            id={"breakfast"}
          >
            Want add breakfast for {formatCurrency(optinalBreakfastPrice)} ?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          id="confirm"
          value={confirmPaid}
          checked={confirmPaid}
          disabled={confirmPaid || isCheckingIn}
          onChange={() => setConfirmPaid((confirmPaid) => !confirmPaid)}
        >
          i confirmed that {guests.fullName} has paid the total amount of{" "}
          {addBreakFast
            ? `${formatCurrency(
                totalPrice + optinalBreakfastPrice
              )}(${formatCurrency(totalPrice)}+${formatCurrency(
                optinalBreakfastPrice
              )})`
            : formatCurrency(totalPrice)}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
