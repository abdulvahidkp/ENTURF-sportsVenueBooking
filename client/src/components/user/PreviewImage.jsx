import React, { useState } from 'react'

function PreviewImage({file}) {

  const [preview,setPreview] = useState({});

  if(file){
    const reader= new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        setPreview(reader.result)
    }
  }
  return (
    <img src={preview} className=' rw-26 h-28' alt="" />
  )
}

export default PreviewImage