const {
    getMessages,
    getChannels,
    getChannelById
} = require('./client');

const resolvers = {
    Query: {
        channels: getChannels,
        messages: getMessages,
		channel(_, {id}) {
		    return getChannelById(id);
		}
    }
};

module.exports = exports = {resolvers};

