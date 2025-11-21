import chats from "../data/chatsData"

function getChats(){
    return chats
}

function getChatsById(chat_id){
    const foundedChats = chats.find(chat => Number(chat.id) === Number(chat_id))
    if (foundedChats){
        return foundedChats
    } else {
        return null
    }
}

export {getChats, getChatsById}