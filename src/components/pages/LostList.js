import React from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const LostList = () => {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ];
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar icon="user" />}
                        title={<Link to="/lost-details">{item.title}</Link>}
                        description="It is a long established fact that a reader will be 
                        distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less normal 
                        distribution of letters, as opposed to using 'Content here, content here', 
                        making it look like readable English. Many desktop publishing packages 
                        and web page editors now use Lorem Ipsum as their default model text, and 
                        a search for 'lorem ipsum' will uncover many web sites 
                        still in their infancy. Various versions have evolved over the years, 
                        sometimes by accident, sometimes on purpose (injected humour and the like)."
                    />
                </List.Item>
            )}
        />
    );
}

export default LostList;