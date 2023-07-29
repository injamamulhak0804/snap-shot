import React from 'react'


const ImgContainer = ({ Img, searchResult }) => {
  return (
    <>
      <div className="img-container">
        <div className="container">
          {
            searchResult ?
              <p>There is no brand Found!!</p>
              :
              (
                Img.map((item, index) => {
                  return (
                    <div key={index} className="each-img">
                      <img src={item.img} />
                    </div>
                  )
                })
              )
          }
        </div>
      </div>
    </>
  )
}

export default ImgContainer