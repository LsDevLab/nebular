export const messages = [
  {
    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: false,
    date: new Date(),
    user: {
      name: '',
      avatar: 'https://i.gifer.com/no.gif',
    },
    lastOfAGroup: true,
  },
  {
    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: true,
    date: new Date(),
    user: {
      name: '...',
      avatar: 'https://i.gifer.com/no.gif',
    },
    lastOfAGroup: true,
  },
  {
    text: 'Hello, how are you?',
    reply: false,
    date: new Date(),
    user: {
      name: '',
      avatar: '',
    },
    lastOfAGroup: false,
  },
  {
    text: 'Hey looks at that pic I just found!',
    reply: false,
    date: new Date(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        type: 'image/jpeg',
        icon: false,
      },
    ],
    user: {
      name: '',
      avatar: '',
    },
    lastOfAGroup: false,
  },
  {
    text: 'What do you mean by that? What do you mean by that? What do you mean by that? What do you mean by that? What do you mean by that?',
    reply: false,
    date: new Date(),
    type: 'quote',
    quote: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    user: {
      name: '',
      avatar: '',
    },
    lastOfAGroup: true,
  },
  {
    text: 'What do you meann by that? What do you mean by that?',
    reply: true,
    date: new Date(),
    type: 'quote',
    quote: 'Hello, how are you? This should be  veryw it fit into the screen.',
    user: {
      name: '✔',
      avatar: '',
    },
    lastOfAGroup: false,
  },
  {
    text: 'Attached is an archive I mentioned',
    reply: true,
    date: new Date(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        icon: 'file-text-outline',
      },
    ],
    user: {
      name: '✔',
      avatar: '',
    },
    lastOfAGroup: true,
  },
  {
    text: 'Meet me there',
    reply: false,
    date: new Date(),
    type: 'map',
    latitude: 40.714728,
    longitude: -73.998672,
    user: {
      name: '',
      avatar: '',
    },
    lastOfAGroup: true,
  },

];
