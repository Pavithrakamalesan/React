import { Typography } from '@mui/material'
import React from 'react'

function About(){
  return (
    <div >
       <h1>About VCET</h1>
       <ol>
       <li>VCET Is a co-educational Engineering College started in the year 2001, administered by Vellalar Educational Trust. </li>
        <li>VET was formed in the year 1969 to provide quality and affordable education - right from primary school to PhD level. </li>
        <li>The Trust manages 9 other institutions – a State board school, a matriculation school, a CBSE School, an Arts and Science college for Women, a coeducational Arts and Science college, a Pharmacy College, Nursing College and a B.Ed college. </li>

         <li>VCET was started with 3 UG programs in engineering with an intake of 180.</li>
          <li>VCET Is approved by AICTE and affiliated to Anna University Chennai. </li>  
         <li> Now the college offers 9 UG programs, 5 PG programs in addition to three Research Centres approved by Anna University for PhD. . More than 3100 students are pursuing their higher education in UG and PG levels.   Four UG programs , BE -Biomedical Engineering, BE- Computer Science and Engineering, BE- Electrical and Electronics Engineering  and BE- Electronics and Communication Engineering got accredited by NBA under Tier 2 scheme in 2016 and subsequently B.Tech - Information Technology   program was  accredited by NBA  in 2018.  VCET was granted autonomous status by UGC from academic year 2016-17. From the first year of autonomy, the college follows CBCS (Choice Based Credit System) offering wide variety of courses to the students to acquire their required knowledge base for a successful future – whether it is a job in   Core or IT Company, or higher studies in India / abroad or be entrepreneurship.</li>
          </ol>
       <Typography variant="body2" color="text.primary" style={{ marginTop: '16px' }}>
       <h2>Links</h2> 
        <ul className='links'>
           <li>Web Mail</li>
            <li>E-Journals</li>
<li>Teaching and Learning Process</li>
<li>Complaints Cum Redressal and RTI</li>
<li>AISHE</li>
        </ul>
       </Typography>
       <Typography variant="body2" color="text.primary" style={{ marginTop: '16px' }}>
        <h2>Mandatory</h2>
        <ul className='mandatory'>
            <li>
NIRF</li>
<li>AICTE</li>
<li>NBA</li>
<li>Anna University</li>
<li>Mandatory Disclosure</li>
<li>Audited Statement Of A/C</li>
<li>Establishment Rules</li>
<li>Code of Conduct</li>
<li>HR Policy Book</li>
        </ul>
       </Typography>
       <Typography variant="body2" color="text.primary" style={{ marginTop: '16px' }}>
    <h2>Others</h2>
    <ul className='Others'>
        <li>Others</li>
<li>NPTEL</li>
<li>Swayam</li>
<li>Vidya-Mitra</li>
<li>Gateway to All PG Courses</li>
<li>Sakshat(Innovative E-Content)</li>
<li>Skill Tests for students</li>
<li>National Voters' Services Portal</li>
    </ul>
       </Typography>
    </div>
  )
}

export default About