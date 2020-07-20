import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
export default function ListThumbnailExample() {
  return (
    <Container>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://cdn.otakusquare.com/otakusquare-com/product-thumbnails/SOL40037/2.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>Megumin rules</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference future for our children
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://cdn.otakusquare.com/otakusquare-com/product-thumbnails/SOL40037/2.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>Megumin rules</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference future for our children
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://cdn.otakusquare.com/otakusquare-com/product-thumbnails/SOL40037/2.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>Megumin rules</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference future for our children
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://cdn.otakusquare.com/otakusquare-com/product-thumbnails/SOL40037/2.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>Megumin rules</Text>
              <Text note numberOfLines={2}>
                Its time to build a difference future for our children
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
