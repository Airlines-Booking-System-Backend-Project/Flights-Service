const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const mumbaiCity = await prisma.city.create({
    data: {
      name: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
    },
  });

  const delhiCity = await prisma.city.create({
    data: {
      name: 'Delhi',
      state: 'Delhi',
      country: 'India',
    },
  });

  const bangaloreCity = await prisma.city.create({
    data: {
      name: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
    },
  });

  const chennaiCity = await prisma.city.create({
    data: {
      name: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
    },
  });

  const hyderabadCity = await prisma.city.create({
    data: {
      name: 'Hyderabad',
      state: 'Telangana',
      country: 'India',
    },
  });

  const mumbaiAirport = await prisma.airport.create({
    data: {
      code: 'BOM',
      name: 'Chhatrapati Shivaji Maharaj International Airport',
      cityId: mumbaiCity.id,
      address: 'Mumbai, Maharashtra, India',
    },
  });

  const delhiAirport = await prisma.airport.create({
    data: {
      code: 'DEL',
      name: 'Indira Gandhi International Airport',
      cityId: delhiCity.id,
      address: 'New Delhi, Delhi, India',
    },
  });

  const bangaloreAirport = await prisma.airport.create({
    data: {
      code: 'BLR',
      name: 'Kempegowda International Airport',
      cityId: bangaloreCity.id,
      address: 'Bangalore, Karnataka, India',
    },
  });

  const chennaiAirport = await prisma.airport.create({
    data: {
      code: 'MAA',
      name: 'Chennai International Airport',
      cityId: chennaiCity.id,
      address: 'Chennai, Tamil Nadu, India',
    },
  });

  const hyderabadAirport = await prisma.airport.create({
    data: {
      code: 'HYD',
      name: 'Rajiv Gandhi International Airport',
      cityId: hyderabadCity.id,
      address: 'Hyderabad, Telangana, India',
    },
  });

  const airplane1 = await prisma.airplane.create({
    data: {
      modelName: 'Boeing 737',
      capacity: 180,
    },
  });

  const airplane2 = await prisma.airplane.create({
    data: {
      modelName: 'Airbus A320',
      capacity: 160,
    },
  });

  const flight1 = await prisma.flight.create({
    data: {
      flightNumber: 'AI101',
      departureAirportCode: mumbaiAirport.code,
      arrivalAirportCode: delhiAirport.code,
      boardingGate: 'A1',
      departureTime: new Date('2025-04-01T06:00:00'),
      arrivalTime: new Date('2025-04-01T08:00:00'),
      totalSeats: 180,
      price: 5000,
      airplaneModelNumber: airplane1.modelNumber,
    },
  });

  const flight2 = await prisma.flight.create({
    data: {
      flightNumber: 'AI202',
      departureAirportCode: delhiAirport.code,
      arrivalAirportCode: bangaloreAirport.code,
      boardingGate: 'B2',
      departureTime: new Date('2025-04-01T09:00:00'),
      arrivalTime: new Date('2025-04-01T11:30:00'),
      totalSeats: 180,
      price: 5500,
      airplaneModelNumber: airplane1.modelNumber,
    },
  });

  const flight3 = await prisma.flight.create({
    data: {
      flightNumber: 'AI303',
      departureAirportCode: bangaloreAirport.code,
      arrivalAirportCode: mumbaiAirport.code,
      boardingGate: 'C3',
      departureTime: new Date('2025-04-01T13:00:00'),
      arrivalTime: new Date('2025-04-01T15:00:00'),
      totalSeats: 180,
      price: 5200,
      airplaneModelNumber: airplane1.modelNumber,
    },
  });

  const flight4 = await prisma.flight.create({
    data: {
      flightNumber: 'AI404',
      departureAirportCode: chennaiAirport.code,
      arrivalAirportCode: hyderabadAirport.code,
      boardingGate: 'D4',
      departureTime: new Date('2025-04-01T10:00:00'),
      arrivalTime: new Date('2025-04-01T11:30:00'),
      totalSeats: 160,
      price: 3000,
      airplaneModelNumber: airplane2.modelNumber,
    },
  });

  const flight5 = await prisma.flight.create({
    data: {
      flightNumber: 'AI505',
      departureAirportCode: hyderabadAirport.code,
      arrivalAirportCode: bangaloreAirport.code,
      boardingGate: 'E5',
      departureTime: new Date('2025-04-01T12:00:00'),
      arrivalTime: new Date('2025-04-01T13:30:00'),
      totalSeats: 160,
      price: 4000,
      airplaneModelNumber: airplane2.modelNumber,
    },
  });

  const flight6 = await prisma.flight.create({
    data: {
      flightNumber: 'AI606',
      departureAirportCode: bangaloreAirport.code,
      arrivalAirportCode: chennaiAirport.code,
      boardingGate: 'F6',
      departureTime: new Date('2025-04-01T14:00:00'),
      arrivalTime: new Date('2025-04-01T15:30:00'),
      totalSeats: 160,
      price: 3500,
      airplaneModelNumber: airplane2.modelNumber,
    },
  });

  await prisma.seats.createMany({
    data: [
      { row: 1, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 1, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 2, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 2, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 3, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 3, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 4, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 4, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 5, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 5, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 6, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },
      { row: 6, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane1.modelNumber },

      { row: 1, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 1, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 2, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 2, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 3, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 3, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 4, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 4, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 5, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 5, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 6, coloumn: 'A', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
      { row: 6, coloumn: 'B', seatType: 'economy', airplaneModelNumber: airplane2.modelNumber },
    ],
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
