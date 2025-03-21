const { PrismaClient } = require('@prisma/client')

const client = new PrismaClient()

client.airplane.createMany({
    data: [
        {
          modelNumber: "A123",
          capacity: 150
        },
        {
          modelNumber: "B456",
          capacity: 200
        },
        {
          modelNumber: "C789",
          capacity: 180
        },
        {
          modelNumber: "D101",
          capacity: 120
        }
      ]
})
.then(async () => {
    await client.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await client.$disconnect()
    process.exit(1)
  })