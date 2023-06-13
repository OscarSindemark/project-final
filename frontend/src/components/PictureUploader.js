import React from "react";
import $ from 'jquery'

export default class PictureUploader extends React.Component {
    constructor(pic) {
        super(pic);

        this.state = {
            picture: false,
            src: false
        }
    }
    
    handlePictureSelected = (event) => {
        const picture = event.target.files[0];
        const src = URL.createdObjectURL(picture)

        this.setState({
            picture: picture,
            src: src
        })
     }

     renderPreview = () => {
        if(this.state.src) {
            return (
                <img src={this.state.src} />
            )
        } else {
            return (
                <p>
                    No Preview
                </p>
            )
        }
     }

     upload = () => {
        const formData = new formData()

        formData.append("file", this.state.picture)

        $.ajax({
            //url needs to change, new api for like imgur or whatever
            url: "/some/api/endpoint",
            method: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(response) {
                response.status(400) ({
                    message: "Wahoo"
                })
            }
        })
     }

    render() {
        return (
            <div>
                <h5>Change avatar</h5>

                <input
                    type="file" 
                />
            <div>
            <p>No preview</p>
            </div>
            <hr/>
            <button>
                Upload
            </button>
            </div>
        )
    }
}

