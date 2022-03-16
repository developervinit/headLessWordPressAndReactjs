import React, { useEffect, useState } from 'react';
const axios = require('axios');


const ImgComp = ({ postContent }) => {

    const [ imgUrl, setImgUrl ] = useState([]);

    const forImgUrl = postContent._links['wp:featuredmedia'][0].href;

    const getImage = async (forImgUrl) => {
        const response = await axios.get(forImgUrl);
        setImgUrl(response.data.guid.rendered);
    }

    useEffect(() => {
        getImage(forImgUrl);
    }, [forImgUrl]);

    return(<>
        <div className="imgClass">
          <img src={imgUrl} />
        </div>
    </>)
}

export default ImgComp;