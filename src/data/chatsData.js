import oldUserAvatar from '../assets/oldUser.png'

const INITIAL_CHATS = [
  {
    id: 1,
    name: "Silvia Altamirano",
    avatar: oldUserAvatar,
    isOnline: true,
    lastSeen: "1 min ago",
    messages: [
      { id: 1, text: "Hey! How's it going?", sender: 'app', timestamp: '10:00 AM Today' },
      { id: 2, text: "We don't talk since you start that React course", sender: 'user', timestamp: '10:02 AM Today' }
    ]
  },
  {
    id: 2,
    name: "Julia Dirisio",
    avatar: oldUserAvatar,
    isOnline: false,
    lastSeen: "Last seen 1 hour ago",
    messages: [
      { id: 1, text: "Are we meeting today?", sender: 'app', timestamp: '10:05 AM Today' },
      { id: 2, text: "Project has been already finished and I have results to show you.", sender: 'app', timestamp: '10:20 AM Today' },
      { id: 3, text: "Knock Knock, are you there? Send me a message!", sender: 'app', timestamp: '10:30 AM Today' },
    ]
  },
];

export default INITIAL_CHATS