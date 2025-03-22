const { PrismaClient } = require('@prisma/client')

const client = new PrismaClient()

client.airplane.createMany({
    data: [
        {
          modelName: "A123",
          capacity: 150
        },
        {
          modelName: "B456",
          capacity: 200
        },
        {
          modelName: "C789",
          capacity: 180
        },
        {
          modelName: "D101",
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