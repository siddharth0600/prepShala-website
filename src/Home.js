import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://www.thelawyerportal.com/wp-content/uploads/GettyImages-1069239598.jpg"
          title="eLecture"
          description="The feature allow users to manage
eLectures from YouTube."
        />
        <Card
          src="https://homebusinessmag.com/wp-content/uploads/2019/07/Depositphotos_29868211_s-2019-e1564169124352.jpg"
          title="Lakshya"
          description="This feature will allow users to set and
monitor their goal."
        />

        <Card
          src="https://learnenglishteens.britishcouncil.org/sites/teens/files/rs261_157781379-low.jpg"
          title="MyNotes"
          description="The feature will allow users to store,
collaborate and manages notes."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://www.callcentrehelper.com/images/stories/2008/06/many-people-chatting-760.jpg"
          title="Group Study"
          description="An interface for doing group study by
remotely authenticating and sharing screen."
        />
        <Card
          src="https://blog.hubspot.de/hubfs/Germany/Blog_images/to-do-listen-apps.png"
          title="ToDo"
          description="This feature will allow the users to
schedule and manage their tasks to be accomplished."
        />
        <Card
          src="https://www.vervelogic.com/images/vl-page/vl-chat-application/vl-chat-application.png"
          title="Edu-Chat"
          description="Portal to communicate with
teammates for education purposes."
        />
      </div>
    </div>
  );
}

export default Home;
