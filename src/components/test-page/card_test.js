import React from 'react';
import Card from './card';
/* import './card_test.css'; */

const CardTest = () => {
    return (
        <div className="home-page">
            <Card
                imageUrl="https://picsum.photos/300/200"
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit."
            />
            <Card
                imageUrl="https://picsum.photos/300/200"
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit."
            />
            <Card
                imageUrl="https://picsum.photos/300/200"
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit."
            />
            <Card
                imageUrl="https://picsum.photos/300/200"
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit."
            />
            <Card
                imageUrl="https://picsum.photos/300/200"
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id augue at ex suscipit tincidunt in vitae metus. Donec imperdiet magna eget mauris ultricies, quis pellentesque massa suscipit."
            />
        </div>
    );
};

export default CardTest;