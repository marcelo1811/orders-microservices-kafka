
(async () => {
  const { Kafka } = require('kafkajs')
  const kafka = new Kafka({
    clientId: 'invoice',
    brokers: ['kafka:9092'],
  })
  
  const consumer = kafka.consumer({ groupId: 'orders' })
  await consumer.connect()
  await consumer.subscribe({ topic: 'orders', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
})()