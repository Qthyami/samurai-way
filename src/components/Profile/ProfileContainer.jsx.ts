import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";

import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/users-reducer";
import {usersPropsType} from "../../users/UsersContainer";
import profile from "./Profile";
type ProfileContainerPropsType= mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType=ReturnType<typeof mapStateToProps>

export type GetUsersResponseType = {
	items: GetUsersItemsType[];
	totalCount: number;
	error?: any;
}
export type GetUsersItemsPhotosType = {
	small?: string;
	large?: string;
}
export type GetUsersItemsType = {
	name: string;
	id: number;
	photos: GetUsersItemsPhotosType;
	status?: string;
	followed: boolean;
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
    }
    componentDidMount() {
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = 2;
        // }
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + "1")
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
    )
    }
}
const mapStateToProps = (state:AppRootStateType) => ({
    profile: state.profilePage.profile
});
type mapDispatchToPropsType={
    setUserProfile: ReturnType<typeof setUserProfileAC>
}

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer);