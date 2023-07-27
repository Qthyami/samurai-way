
export type dialogsDataType = {
    id: number,
    name: string
}
export type messagesDataType = {
    id: number,
    message: string,

}
export type stateType = {
    profilePage: {
        posts: postsDataType[]

    },
    messagesPage: {
        dialogs: dialogsDataType[],
        messages: messagesDataType[]
    }

}
export type postsDataType = {
    id: number,
    message: string,
    likesCount: number
}
export const initialState:stateType = {
    profilePage:{
        posts: [
            {id:1, message:"Privet, kak dela?",likesCount:1 },
            {id:2, message:"Kak pogoda AZAZA", likesCount:10}

        ],

    },
    messagesPage:{
        dialogs: [
            {id:1, name:"Афанасий"},
            {id:2, name:"МикроПетрович"},
            {id:3, name:"Орджоникидзе"},
            {id:4, name:"Онотоле"}
        ],
        messages:[
            {id:1, message:"Hi" },
            {id:2, message:"How much is your IQ?"},
            {id:3, message:"A?" },
            {id:4, message:"ШО" }
        ]
    }
}
type actionType=addPostsAction
export const stateReducer = (state:stateType=initialState, action:actionType)=>{
    switch (action.type){
        case "ADD-POST" :{
            const newPost = {
                id:(state.profilePage.posts.length+1),
                message:action.postMessage,
                likesCount: 0
            };
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    posts: [...state.profilePage.posts, newPost],
                },
            };

        }
        default: return state

    }
}
type addPostsAction = ReturnType<typeof addPostsAC>
export const addPostsAC=(postMessage:string)=>{
    return {type: "ADD-POST", postMessage} as const
}
