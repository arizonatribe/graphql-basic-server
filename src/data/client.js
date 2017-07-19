/* TODO: Replace with async function that uses ORM or some node client appropriate for a given database back-end */
const {mockChannels, mockMessages} = require('./mocks');

module.exports = exports = {
    getChannels: () => mockChannels, 
    getMessages: () => mockMessages,
    getChannelById: (id) => (
        mockChannels.find(channel => channel.id == id)
    )
};

