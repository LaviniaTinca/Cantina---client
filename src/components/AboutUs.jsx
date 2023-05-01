import React from 'react'
import { Box, Typography } from "@mui/material"


const AboutUs = () => {
  return (
    <Box margin="20px" maxWidth="1300px" mx="auto" p={2} bgcolor="white" boxShadow={4}>
      <Typography variant="h1" component="h1" gutterBottom color="primary">
        About Us
      </Typography>

      <Box display="flex" alignItems="center">
        <Box
          component="img"
        //   src="/public/logo512.png"
          src="https://th.bing.com/th/id/R.fd5766d647482b97520456f961edf90a?rik=pv56b%2fsxw08wKA&riu=http%3a%2f%2fwww.uacorporate.com%2fwp-content%2fuploads%2f2016%2f05%2fChef_Variety_Composite_2.jpg&ehk=LyWPUdaacinYle5gRHVf6GfE%2beT4kA5gjTTuWwBNYbU%3d&risl=&pid=ImgRaw&r=0"
          alt="Our Team"
          mx="auto"
          display="block"
          borderRadius="20%"
          border={0.1}
          borderColor="primary.main"
          maxHeight={200}
        />

        <Box ml={4}>
          <Typography variant="body1" gutterBottom align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor quis nisl efficitur semper eu ac odio. Nullam eget velit tincidunt, blandit ipsum nec, viverra lorem. Vestibulum posuere quam a vestibulum finibus. Aenean aliquam sapien at ante sollicitudin commodo. Fusce quis imperdiet magna, nec egestas ipsum. Morbi faucibus enim vitae urna commodo, at semper nisi luctus. Sed pharetra erat eu diam commodo, id viverra eros tristique.
          </Typography>

          <Typography variant="body1" gutterBottom align="justify">
            Morbi in quam auctor, elementum libero eu, tincidunt odio. Etiam sit amet purus et sapien rhoncus consectetur. Fusce vel lacinia sapien. Nullam laoreet sem vel mauris pharetra dictum. Praesent vitae massa sed ante luctus rutrum vel eu enim. Praesent id dolor ut velit tincidunt tincidunt ut at erat. Nullam ultrices nulla et sagittis elementum. Phasellus euismod, leo ut auctor dignissim, lorem eros sagittis turpis, sit amet suscipit nulla lacus a est.
          </Typography>

          <Typography variant="body1" gutterBottom align="justify" className="about-us-contact">
            Come to visit us and take the <a href="menu.php"><strong>lunch meal!</strong></a>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
