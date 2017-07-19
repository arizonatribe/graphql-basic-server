const mockMessages = [{
    id: 1,
    channelId: 1,
    content: 'Hey SF Node'
}, {
    id: 2,
    channelId: 1,
    content: 'GraphQL is awesome'
}, {
    id: 3,
    channelId: 2,
    content: 'Let\'s see what else we can do to it!'
}];

const mockChannels = [{
    id: 1,
    name: '#General'
}, {
    id: 2,
   name: '#Development'
}, {
    id: 3,
    name: '#Marketing'
}];

const mocks = {
    Query: () => ({
        channels: mockChannels,
        messages: mockMessages
    }),
    Channel: () => ({
        messages: ({id}) => (
            mockMessages.filter(o => o.channelId == id)
        )
    })
};

module.exports = exports = {
    mockChannels, 
    mockMessages,
    mocks
};

