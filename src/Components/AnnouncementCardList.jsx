import React from 'react'
import AnnouncementCard from './AnnouncementCard';
import { announcementPost } from '../Data/AnnouncementData';

const AnnouncementCardList = () => {
  return (
      <div>
          {announcementPost.map((item) => (
              <AnnouncementCard key={item.id} data={item} />
          ))}
    </div>
  )
}

export default AnnouncementCardList