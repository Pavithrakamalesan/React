import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
function Objective(){
  return (
    <div>
        <h1>Vision</h1>
        <p>To provide a wide range of Academic and Research Programmes and strive to develop a Centre of Excellence for Learning.

</p>
<h1>Mission</h1>
<ul>
    <li>To impart essential knowledge to the students through quality education, training and research activities.
</li>
<li>To inculcate the students with Societal Awareness, Professional Ethics and Leadership Qualities.
</li>
<li>To mould the students as high quality Engineers, Technocrats, Scientists, Administrators and Entrepreneurs.

</li>
</ul>
<h2>Quality Policy</h2>
<p>committed to inculcate the values of the discipline, honesty and integrity among students, faculty and staff and to bring out the significance of the close interaction among Educational Institutions, Industries and the society of Cultural, Social and Economic advancement of our Nation.</p>
    
<Card className='card'>
     <CardContent>
     <Typography variant="h5" component="div">
    
     </Typography>
     <div className="image-container">
       <CardMedia
         component="img"
         alt="Sample Image 2"
         height="600"
         src='https://velalarengg.ac.in/campus/infra/Physical/Civil%20Block.jpg'
         title="Sample Image 2"
         style={{ marginRight: '10px' }}/>
     </div>
   </CardContent></Card>
   </div>
  )
}

export default Objective
