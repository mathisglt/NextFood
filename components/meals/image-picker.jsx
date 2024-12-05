"use client";
import classes from "./image-picker.module.css"
import {useRef,useState} from 'react'
import Image from 'next/image';

export default function ImagePicker({label,name}) {
    const [pickedimg,setpickedimg] = useState();
    const imageInput = useRef();
    function pickImage(){
        imageInput.current.click()
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file){
            setpickedimg(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {setpickedimg(fileReader.result)};
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedimg && <Image src = {pickedimg} alt = "preview image" fill/>}
                </div>
                <input required className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref = {imageInput} onChange={handleImageChange}/>
            </div>
            <button className={classes.button} type="button" onClick={pickImage}>Ajouter une Image</button>
        </div>
    )
}