import React, {useState} from 'react'
import Input from '../Inputs/Input';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import UploadImg from '../Inputs/UploadImg';

const ProfileForm = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    // API to fetch username if existing
  return (
    <div>
        <div className='mb-12'>
            <h4 className='font-bold text-primary text-[24px] mb-3'>Generic info</h4>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <Input 
                    label="Username"
                    type="text"
                    error={false}
                    disabled={!props.isEditing}
                    id="username"
                    placeholder="Write your username"
                    errorTrailingIcon={<ExclamationCircleIcon className="w-5 h-5 text-red-500" aria-hidden="true" />}
                    errorMsg="Oh no there was an error"
                    value={props.name}
                    onchange={(e) => props.setName(e.target.value)}
                />
                <Input 
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    error={false}
                    disabled={!props.isEditing}
                    id="link"
                    placeholder="Choose your password"
                    trailingIcon={
                        <>
                            {showPassword ? (
                                <i 
                                    className="bi bi-eye-slash-fill text-primary"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <i 
                                    className="bi bi-eye-fill text-primary"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </>
                    }
                    errorMsg="More than 8 characters!"
                    value={props.password}
                    onchange={(e) => props.setPassword(e.target.value)}
                />
            </div>
        </div>
        
        <div className='mb-12'>
            <h4 className='font-bold text-primary text-[24px] mb-3'>Image stuff</h4>
            <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-8'>
                <div className='mb-8'>
                    <h5 className='mb-1 text-sm font-bold'>Profile picture</h5>
                    <div className='flex flex-col items-center gap-4 md:flex-row'>
                        <div className='w-[120px] h-[120px] shrink-0 overflow-hidden rounded-lg bg-dark2'>
                            <img src={props.profileImg && props.profileImg !== null ? URL.createObjectURL(props.profileImg) : "/img/profile_holder.jpeg"} className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <UploadImg 
                                selectedImage={props.profileImg}
                                setSelectedImage={props.setProfileImg}
                                title="Upload your profile picture"
                                disabled={!props.isEditing}
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-8'>
                    <h5 className='mb-1 text-sm font-bold'>Banner image</h5>
                    <div className='flex flex-col items-center gap-4 md:flex-row'>
                        <div className='w-[120px] h-[120px] shrink-0 overflow-hidden rounded-lg bg-dark2'>
                            <img src={props.bannerImg && props.bannerImg !== null ? URL.createObjectURL(props.bannerImg) : "/img/banner-holder.jpeg"} className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <UploadImg 
                                selectedImage={props.bannerImg}
                                setSelectedImage={props.setBannerImg}
                                title="Upload your banner image"
                                disabled={!props.isEditing}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileForm