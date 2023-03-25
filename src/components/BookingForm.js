import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { useState } from 'react';

function BookingForm() {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('17:00');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value);
  };

  const handleBookingTimeChange = (event) => {
    setBookingTime(event.target.value);
  };

  const handleNumGuestsChange = (event) => {
    setNumGuests(parseInt(event.target.value));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  return (
    <Box maxW="200px" m="auto">
      <FormControl isRequired>
        <FormLabel htmlFor="res-date">Choose date</FormLabel>
        <Input type="date" id="res-date" value={bookingDate} onChange={handleBookingDateChange} required />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="res-time">Choose time</FormLabel>
        <Select id="res-time" value={bookingTime} onChange={handleBookingTimeChange} required>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests} onChange={handleNumGuestsChange} required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </Select>
      </FormControl>

      <Button colorScheme="blue" mt="20px">Make Your reservation</Button>
    </Box>
  );
}

export default BookingForm;
