import React, {useState} from "react";
import './Profile.css'
import { useDispatch, useSelector } from "react-redux";
import PictureUploader from "components/PictureUploader";
import Button from '../components/Buttons/Button';
import ProfileForm from '../components/Forms/ProfileForm';

import UserReducer from "../reducers/user";




const Profile = () => {
    const dispatch = useDispatch()  
    const { username } = useSelector((state) => state.user)
    const [isEditing, setIsEditing] = useState(false)
    //{const [name, setName] = useState('PastaYOLO')}
    const [password, setPassword] = useState('')
    const [profileImg, setProfileImg] = useState(null)
    const [bannerImg, setBannerImg] = useState(null)

    return(
        <>

            <div className="absolute top-0 left-0 w-full h-[100px] overflow-hidden bg-primary">
                <img src={bannerImg && bannerImg !== null ? URL.createObjectURL(bannerImg) : "/img/banner-holder.jpeg"} className="object-cover w-full h-full" />
            </div>
            <div className="relative pt-[60px]">
                <div className="border-black border-4 w-[120px] bg-dark2 aspect-square rounded-full overflow-hidden relative z-[20]">
                    <img src={profileImg && profileImg !== null ? URL.createObjectURL(profileImg) : "/img/profile_holder.jpeg"} className="object-cover w-full h-full" />
                </div>
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="font-bold text-[32px] text-primary">{username}</h2>
                        <p className="text-white lowercase">linkup.io/{username}</p>
                    </div>
                    {!isEditing ? (
                            <Button 
                                type="button"
                                text="Edit profile"
                                onclick={() => setIsEditing(true)}
                            />
                        ) : (
                            <Button 
                                type="button"
                                text="Save"
                                onclick={() => setIsEditing(false)}
                            />
                        )
                    }
                </div>
                <div className="profile-form-wrapper">
                    <ProfileForm 
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        name={username}
                        setName={(name) => {dispatch(UserReducer.actions.startSetUsername(name))}}
                        password={password}
                        setPassword={(name) => {dispatch(UserReducer.actions.startSetPassword(name))}}
                        profileImg={profileImg}
                        setProfileImg={setProfileImg}
                        bannerImg={bannerImg}
                        setBannerImg={setBannerImg} 
                        
                    />
                </div>

                <div>
                    <h3>Favorites</h3>
                </div>
            </div>

            
            {/* <div className="access">
                <figure>{username?.username.charAt(0).toUpperCase()}</figure>
            <span>
                <p>Welcome <strong>{username?.username}!</strong> Access granted to your profile.</p>
            </span>
            </div>
            <section className="profile-section">
                <img className="profile-pic"/>
                <PictureUploader />
                <div className="name">{username}</div>
                <div className="about-section">placeholder text...</div>
                <div className="favorite-games">Here's where you can find your favorite games
                
                </div>
            </section> */}
        </>        
    )
}

export default Profile


/* TODO star for favorite empty and insert a boolean favorite:false in the JSON per every game and then trigger the stars with a onChange and set it as a favorite and show it on the profile */