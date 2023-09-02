import usersReducer, {followAC, setUsersAC, unfollowAC, initialStateType, userType} from "./users-reducer";
import {v1} from "uuid";
let startUsersState :initialStateType
let userId:string
beforeEach(()=>{

     startUsersState= {
        users: [
            {id: v1(),photoUrl:"#", followed:false, fullname: 'Dimych', status:"I`m a boss", location:{city:"Minsk", country:"Belarus"}},
            {id: v1(),photoUrl:"#", followed:true, fullname: 'Andrew', status:"I`m a boss too", location:{city:"Moscow", country:"Russia"}},
            {id: v1(),photoUrl:"#", followed:false, fullname: 'Sveta', status:"I`m a boss +1", location:{city:"Kiev", country:"Ukraine"}},
        ]

    };
    userId = startUsersState.users[1].id;

})

test("users reducer on action FOLLOW should be followed:true", () => {
    const endState = usersReducer(startUsersState, followAC(userId));
    const user = endState.users.find(u => u.id === userId);
    expect(user && user.followed).toBe(true);
});
test("users reducer on action UNFOLLOW should be followed:false", () => {
    const endState = usersReducer(startUsersState, unfollowAC(userId));
    const user = endState.users.find(u => u.id === userId);
    expect(user && user.followed).toBe(false);
});
test("users reducer should add new user object", () => {
    const newUser: userType[] = [{id: v1(),photoUrl:"#", followed: false, fullname: 'JO-JO', status: "ジョジョの奇妙な冒険", location: {city: "Tokio", country: "Japan"}}];
    const endState = usersReducer(startUsersState, setUsersAC(newUser)); //  обертка в массив, так как setUsersAC ожидает массив пользователей
    const lastUser = endState.users[endState.users.length - 1];
    console.log(endState )
    expect(lastUser).toEqual(newUser[0]); // Проверяем на равенство объектов
});
