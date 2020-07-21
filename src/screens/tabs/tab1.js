import React, { useEffect } from "react";
import { Alert, View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Container, Content, List } from "native-base";

import DataItem from "../../components/dataItem";
import { getArticles } from "../../service/news";

export default function ListThumbnailExample() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    getArticles().then(
      (data) => {
        setLoading(false);
        setData(data);
      },
      (error) => {
        Alert.alert("Error", "Something went wrong!");
      }
    );
  });

  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={isLoading} />
        <Text style={styles.text}>Please wait...</Text>
      </View>
    );
  else
    return (
      <Container>
        <Content>
          <List
            dataArray={data}
            renderRow={(item) => {
              return <DataItem data={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
  },
});
