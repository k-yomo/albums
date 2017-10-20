import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  return (
    <Card>{props.album.title}</Card>
  );
};

export default AlbumDetail;
