import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useQueryBookings } from "./useQueryBookings";
import Spinner from "../../ui/Spinner";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckingOut } from "../check-in-out/useCheckout";
import { FaTrash } from "react-icons/fa";
import { deleteBooking } from "../../services/apiBookings";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { bookings, isLoading, error } = useQueryBookings();
  const { checkout, isCheckingOut } = useCheckingOut();
  const { deleteCkoutBook, isBookingDeleteing } = useDeleteBooking();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if (isLoading) return <Spinner />;
  if (!bookings) return <Empty resourceName={"boking"} />;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {bookings.id}</Heading>
          <Tag type={statusToTagName[bookings.status]}>
            {bookings.status.replace("-", " ")}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={bookings} />

      <ButtonGroup>
        {bookings.status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookings.bookingId}`)}>
            Check in
          </Button>
        )}
        {bookings.status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookings.id)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() =>
                deleteCkoutBook(bookings.id, {
                  onSettled: () => navigate(-1),
                })
              }
              disabled={isBookingDeleteing}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
