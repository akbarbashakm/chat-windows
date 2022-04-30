import React from 'react';
import { Group, Groups } from '.';


const GROUPS = [{
  id: 'entertainment',
  name: 'Entertainment',
  img: 'https://i.imgur.com/7rg1hZH.jpg'
}, {
  id: 'sports',
  name: 'Sports',
  img: 'https://i.imgur.com/8jTMwZy.jpg'
}, {
  id: 'tech',
  name: 'Tech',
  img: 'https://i.imgur.com/E90WIZf.jpg'
}, {
  id: 'news',
  name: 'News',
  img: 'https://i.imgur.com/X2wGLBP.jpg'
}]

const GroupsPanel = ({
  roomId,
  setRoomId
}) => {

    return (
        <Groups>
            {GROUPS.map(({ img, id, name }) => {
              return (
                <Group isSelected={roomId === id} key={id} onClick={() => {
                  setRoomId(id)
                }}>
                  <img src={img} alt="" />
                  <div>
                    <span>{name}</span>
                  </div>
                </Group>
              )
            })}
          </Groups>
    )
}

export default GroupsPanel;