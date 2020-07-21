import React from "react";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

const DataItem = (props) => {
  const data = props.data;

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              data.urlToImage != null
                ? data.urlToImage
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA5cj530yPYx8okSi2LprkqXwxlAqBRdChRQ&usqp=CAU",
          }}
        />
      </Left>
      <Body>
        <Text note numberOfLines={2} style={{ fontWeight: "bold" }}>
          {data.title}
        </Text>
        <Text note numberOfLines={2}>
          {data.description}
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default DataItem;
