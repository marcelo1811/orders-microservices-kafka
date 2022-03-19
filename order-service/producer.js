const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'order',
  brokers: ['kafka:9092'],
})

const producer = kafka.producer()

const produce = async (message) => {
  await producer.connect()
  
  await producer.send({
    topic: 'orders',
    messages: [
      { value: message },
    ],
  })
}  

module.exports = produce;