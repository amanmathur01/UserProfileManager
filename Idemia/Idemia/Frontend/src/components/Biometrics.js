import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';

function Biometrics() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 // const formData=new formData()
  useEffect(() => {
    fetch('http://localhost:8082/biometric')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      });
  }, []);
  // const handleImageUpload = (personId, image) => {
  //   const formData = new FormData(); // Define formData here
  //   formData.append('file', image);

  //   for (let pair of formData.entries()) {
  //     console.log(`${pair[0]}, ${pair[1]}`);
  //   }

  //   fetch(`http://localhost:8080/biometric/${personId}`, {
  //     method: 'POST',
  //     // headers: {
  //     //   'Content-Type': 'application/json',
  //     // },
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserData((prevData) => ({
  //         ...prevData,
  //         img: { ...prevData.img, base64Image: image },
  //       }));
  //     })
  //     .catch((error) => {
  //       console.error('Error uploading image:', error);
  //     });
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="App">
      <UserDetails user={userData}/>
    </div>
  );
}

export default Biometrics;
