import React from 'react';
import styled from 'styled-components';

const VideoPlayer = styled.video`
  width: 100%;
`;


const ScheduleTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const ScheduleHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const ScheduleRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const ScheduleData = styled.td`
  text-align: left;
  padding: 10px;
`;

const SocialCard = styled.div`
  width: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <SocialCard>
      <VideoPlayer
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
      />
      <ScheduleTable>
        <thead>
          <tr>
            <ScheduleHeader>Time</ScheduleHeader>
            <ScheduleHeader>Show</ScheduleHeader>
          </tr>
        </thead>
        <tbody>
          <ScheduleRow>
            <ScheduleData>12:00 PM</ScheduleData>
            <ScheduleData>News</ScheduleData>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleData>01:00 PM</ScheduleData>
            <ScheduleData>Sports</ScheduleData>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleData>02:00 PM</ScheduleData>
            <ScheduleData>Movie</ScheduleData>
          </ScheduleRow>
        </tbody>
      </ScheduleTable>
    </SocialCard>
  );
}

export default App;

