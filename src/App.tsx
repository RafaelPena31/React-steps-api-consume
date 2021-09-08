import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/core/header/header.component";
import { HeaderDataProps } from "./components/core/header/header.types";
import Timeline from "./components/core/timeline/timeline.component";
import SocialService from "./service/social.service";
import "./styles/global.style.css";
import { IPost } from "./types/posts";

function App() {
  const headerOptionsData: HeaderDataProps = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Postagens",
      link: "#",
    },
    {
      title: "Albuns",
      link: "#",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState<IPost[]>([]);

  const loadSocialData = useCallback(async () => {
    const postData = await SocialService().loadSocialData();
    setPostData(postData);
  }, []);

  useEffect(() => {
    loadSocialData();
  }, [loadSocialData]);

  useEffect(() => {
    const isPostDataAvailable = postData.length > 0;

    if (isPostDataAvailable) {
      setIsLoading(false);
    }
  }, [postData]);

  return (
    <div className="App">
      <Header options={headerOptionsData} />

      <div className="content">
        {isLoading ? (
          <div className="load">
            <h1>Loading...</h1>
          </div>
        ) : (
          <Timeline posts={postData} />
        )}
      </div>
    </div>
  );
}

export default App;
