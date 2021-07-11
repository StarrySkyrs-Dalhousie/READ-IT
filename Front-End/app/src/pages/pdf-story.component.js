import { useRef } from 'react'
import {
  EpubViewer,
  ReactEpubViewer
} from 'react-epub-viewer'

const Story = () => {
  const viewerRef = useRef(null);
  
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <ReactEpubViewer 
        url={'files/Alices Adventures in Wonderland.epub'}
        ref={viewerRef}
      />
    </div>
  );
}

export default Story